import {
  Collection,
  Entity,
  Filter,
  ManyToOne,
  MikroORM,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import type { SqliteDriver } from '@mikro-orm/sqlite';

@Entity({ collection: 'companies' })
export class Company {

  constructor(name: string) {
    this.name = name;
  }

  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  @OneToMany({ entity: () => Employee, mappedBy: emp => emp.company })
  employees = new Collection<Employee>(this);

}

@Entity({ collection: 'employees' })
@Filter({ name: 'activeEmployeesOnly', cond: { active: true }, default: true })
export class Employee {

  constructor(name: string, active: boolean) {
    this.name = name;
    this.active = active;
  }

  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property({
    nullable: false,
    default: true,
  })
  active!: boolean;

  @ManyToOne({
    entity: () => Company,
    nullable: false,
    inversedBy: company => company.employees,
  })
  company!: Company;

}

describe('GH issue 2603', () => {
  let orm: MikroORM<SqliteDriver>;
  const companyName = 'Some company';

  beforeAll(async () => {
    orm = await MikroORM.init({
      entities: [Company, Employee],
      dbName: ':memory:',
      type: 'sqlite',
    });
    await orm.getSchemaGenerator().createSchema();
  });

  beforeEach(async () => {
    const setupEm = orm.em.fork();
    const c = setupEm.create(Company, {
      name: companyName,
      employees: [
        {
          name: 'Bob',
          active: false,
        },
        {
          name: 'Susan',
          active: true,
        },
      ],
    });

    setupEm.persistAndFlush(c);
  });

  afterAll(() => orm.close(true));

  test('just turning off filter bypasses identity map', async () => {
    const testEm = orm.em.fork();

    const loadedCompany = await testEm.findOneOrFail(Company, { name: companyName }, { populate: ['employees'] });
    expect(loadedCompany.employees.length).toEqual(1); // there is one active employee based on the default filter

    const reloadedCompany = await testEm.findOneOrFail(Company, { name: companyName }, { populate: ['employees'], filters: false });
    expect(reloadedCompany.employees.length).toEqual(2); // there are two employees total: one active, one inactive. This fails
                                                       // because the `filters: false` option is not honored and the company and employee
                                                       // data is retrieved from the identity map.
  });

  test('turning off filter and refreshing bypasses identity map', async () => {
    const testEm = orm.em.fork();

    const loadedCompany = await testEm.findOneOrFail(Company, { name: companyName }, { populate: ['employees'] });
    expect(loadedCompany.employees.length).toEqual(1); // there is one active employee based on the default filter

    const reloadedCompany = await testEm.findOneOrFail(Company, { name: companyName }, { populate: ['employees'], filters: false, refresh: true });
    expect(reloadedCompany.employees.length).toEqual(2); // this will succeed because of the `refresh: true` option
  });
});

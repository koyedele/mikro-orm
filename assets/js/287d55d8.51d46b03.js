"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20284],{3905:function(e,o,n){n.d(o,{Zo:function(){return p},kt:function(){return k}});var t=n(67294);function a(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){a(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,t,a=function(e,o){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var o=t.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):r(r({},o),e)),n},p=function(e){var o=c(e.components);return t.createElement(s.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||i;return n?t.createElement(m,r(r({ref:o},p),{},{components:n})):t.createElement(m,r({ref:o},p))}));function k(e,o){var n=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50375:function(e,o,n){n.r(o),n.d(o,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var t=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],l={title:"Collections"},s=void 0,c={unversionedId:"collections",id:"version-2.7/collections",title:"Collections",description:"OneToMany and ManyToMany collections are stored in a Collection wrapper. It implements",source:"@site/versioned_docs/version-2.7/collections.md",sourceDirName:".",slug:"/collections",permalink:"/docs/2.7/collections",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/collections.md",tags:[],version:"2.7",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1640634192,formattedLastUpdatedAt:"12/27/2021",frontMatter:{title:"Collections"},sidebar:"version-2.7/docs",previous:{title:"Using entity constructors",permalink:"/docs/2.7/entity-constructors"},next:{title:"Unit of Work",permalink:"/docs/2.7/unit-of-work"}},p=[{value:"OneToMany collections",id:"onetomany-collections",children:[],level:2},{value:"ManyToMany collections",id:"manytomany-collections",children:[{value:"Unidirectional",id:"unidirectional",children:[],level:3},{value:"Bidirectional",id:"bidirectional",children:[],level:3}],level:2},{value:"Propagation of Collection&#39;s add() and remove() operations",id:"propagation-of-collections-add-and-remove-operations",children:[],level:2}],d={toc:p};function u(e){var o=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OneToMany")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ManyToMany")," collections are stored in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Collection")," wrapper. It implements\niterator so you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"for of")," loop to iterate through it. "),(0,i.kt)("p",null,"Another way to access collection items is to use bracket syntax like when you access array items.\nKeep in mind that this approach will not check if the collection is initialed, while using ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),"\nmethod will throw error in this case."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that array access in ",(0,i.kt)("inlineCode",{parentName:"p"},"Collection")," is available only for reading already loaded items, you\ncannot add new items to ",(0,i.kt)("inlineCode",{parentName:"p"},"Collection")," this way. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.findOne(Author, '...', ['books']); // populating books collection\n\n// or we could lazy load books collection later via `init()` method\nawait author.books.init();\n\nfor (const book of author.books) {\n  console.log(book.title); // initialized\n  console.log(book.author.isInitialized()); // true\n  console.log(book.author.id);\n  console.log(book.author.name); // Jon Snow\n  console.log(book.publisher); // just reference\n  console.log(book.publisher.isInitialized()); // false\n  console.log(book.publisher.id);\n  console.log(book.publisher.name); // undefined\n}\n\n// collection needs to be initialized before you can work with it\nauthor.books.add(book);\nconsole.log(author.books.contains(book)); // true\nauthor.books.remove(book);\nconsole.log(author.books.contains(book)); // false\nauthor.books.add(book);\nconsole.log(author.books.count()); // 1\nauthor.books.removeAll();\nconsole.log(author.books.contains(book)); // false\nconsole.log(author.books.count()); // 0\nconsole.log(author.books.getItems()); // Book[]\nconsole.log(author.books.getIdentifiers()); // array of string | number\nconsole.log(author.books.getIdentifiers('_id')); // array of ObjectID\n\n// array access works as well\nconsole.log(author.books[1]); // Book\nconsole.log(author.books[12345]); // undefined, even if the collection is not initialized\n")),(0,i.kt)("h2",{id:"onetomany-collections"},"OneToMany collections"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OneToMany")," collections are inverse side of ",(0,i.kt)("inlineCode",{parentName:"p"},"ManyToOne")," references, to which they need to point via ",(0,i.kt)("inlineCode",{parentName:"p"},"fk")," attribute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @ManyToOne()\n  author: Author;\n\n}\n\n@Entity()\nexport class Author {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @OneToMany({ entity: () => Book, mappedBy: 'author' })\n  books = new Collection<Book>(this);\n\n}\n")),(0,i.kt)("h2",{id:"manytomany-collections"},"ManyToMany collections"),(0,i.kt)("p",null,"As opposed to SQL databases, with MongoDB we do not need to have join tables for ",(0,i.kt)("inlineCode",{parentName:"p"},"ManyToMany")," relations.\nAll references are stored as an array of ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectID"),"s on owning entity. "),(0,i.kt)("h3",{id:"unidirectional"},"Unidirectional"),(0,i.kt)("p",null,"Unidirectional ",(0,i.kt)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined only on one side, and marked explicitly as ",(0,i.kt)("inlineCode",{parentName:"p"},"owner"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@ManyToMany({ entity: () => Book, owner: true })\nbooks = new Collection<Book>(this);\n")),(0,i.kt)("h3",{id:"bidirectional"},"Bidirectional"),(0,i.kt)("p",null,"Bidirectional ",(0,i.kt)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined on both sides, while one is owning side (where references are store),\nmarked by ",(0,i.kt)("inlineCode",{parentName:"p"},"inversedBy")," attribute pointing to the inverse side:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\ntags = new Collection<BookTag>(this);\n")),(0,i.kt)("p",null,"And on the inversed side we define it with ",(0,i.kt)("inlineCode",{parentName:"p"},"mappedBy")," attribute poining back to the owner:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@ManyToMany({ entity: () => Book, mappedBy: 'tags' })\nbooks = new Collection<Book>(this);\n")),(0,i.kt)("h2",{id:"propagation-of-collections-add-and-remove-operations"},"Propagation of Collection's add() and remove() operations"),(0,i.kt)("p",null,"When you use one of ",(0,i.kt)("inlineCode",{parentName:"p"},"Collection.add()")," method, the item is added to given collection,\nand this action is also propagated to its counterpart. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// one to many\nconst author = new Author(...);\nconst book = new Book(...);\n\nauthor.books.add(book);\nconsole.log(book.author); // author will be set thanks to the propagation\n")),(0,i.kt)("p",null,"For M:N this works in both ways, either from owning side, or from inverse side. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// many to many works both from owning side and from inverse side\nconst book = new Book(...);\nconst tag = new BookTag(...);\n\nbook.tags.add(tag);\nconsole.log(tag.books.contains(book)); // true\n\ntag.books.add(book);\nconsole.log(book.tags.contains(tag)); // true\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Collections on both sides have to be initialized, otherwise propagation won't work.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Although this propagation works also for M:N inverse side, you should always use owning\nside to manipulate the collection.")),(0,i.kt)("p",null,"Same applies for ",(0,i.kt)("inlineCode",{parentName:"p"},"Collection.remove()"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/2.7/#table-of-contents"},"\u2190"," Back to table of contents")))}u.isMDXComponent=!0}}]);
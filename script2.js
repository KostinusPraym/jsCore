"use strict";
// 1 ====================================================================================================
// const obj = {
//   a: 21,
//   b: "xx",
// };

// function doSome(...args) {
//     console.log(args)
// }

// doSome.call(obj, 21,1,34,5,7)

// 1.1 ====================================================================================================

// const obj = {
//   a: 21,
//   b: "xx",
// };

// function doSome(...args) {
//   console.log(args);
// }

// const res = doSome.bind(null, 21, 1, 34, 5, 6)();

// 2 ====================================================================================================

// var animals = [
//   { species: "Лев", name: "Король" },
//   { species: "Кит", name: "Фэйл" },
// ];

// for (let i = 0; i < animals.length; i++) {
//   (function (i) {
//     this.print = function () {
//       console.log("#" + i + " " + this.species + ": " + this.name);
//     };
//     this.print();
//   }).call(animals[i], i);
// }

// 3 ====================================================================================================

// this.x = 9;
// var module = {
//   x: 81,
//   getX: function () {
//     return this.x;
//   },
// };

// console.log(module.getX());

// var getX = module.getX;
// console.log(getX());

// var boundGetX = getX.bind(module);

// console.log(boundGetX());

// 4 ====================================================================================================

// function list() {
//   Этот сбивающий с толку код используется для преобразования
//   'массивоподобного объекта' в настоящий массив

//   return Array.prototype.slice.call(arguments);
// }

// var list1 = list(1, 2, 3);

// console.log(list1)

// var leadingThirteenList = list.bind(null, 37);

// var list2 = leadingThirteenList();

// console.log(list2)

// var list3 = leadingThirteenList(1, 2, 3);

// console.log(list3)

// 5 ====================================================================================================

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }

// console.log(new Food('cheese', 5).name);

// 6 ====================================================================================================

// function logName(surname) {
//     console.log(surname)
//     console.log(this.name)
// }

// const user = { name: 'Roman'}

// const logNameA = logName.bind(user, 'Alexanov')

// logNameA()

// user.name = 'Kostya'

// logNameA()

// const obj = {
//     x: 10,
//     foo() {
//         const x = 20
//         return this.baz
//     },
//     baz: () => console.log(this.x)
// }

// const x = 30

// obj.foo()()

// 7 ====================================================================================================

// function foo() {
//     foo.x = 30
//     const {x} = this
//     console.log(x)

// }

// foo.x = 10

// foo.call(foo, 20)

// 8 ====================================================================================================

// const obj = {
//   x: 10,
//   foo() {
//     const x = 20;
//     return this.baz;
//   },
//   baz: () => console.log(this.x),
// };

// const x = 30;
// obj.foo()();

// 9 ====================================================================================================

// const data = {
//   limitAge: 25,
//   users: [
//     {
//       name: "Max",
//       age: 20,
//     },
//     {
//       name: "Jack",
//       age: 35,
//     },
//   ],
//   getUsers() {
//     return this.users.filter(function(user) {
//         return user.age > this.limitAge
//     })
//   }
// };

// const result = data.getUsers();
// console.log(result)

// 9.1 ====================================================================================================

// const data = {
//   limitAge: 25,
//   users: [
//     {
//       name: "Max",
//       age: 20,
//     },
//     {
//       name: "Jack",
//       age: 35,
//     },
//   ],
//   getUsers() {
//     return this.users.filter.call(this.users, function (user) {
//       user.age > this.limitAge;
//     });
//   },
// };

// const result = data.getUsers();
// console.log(result);

// 10 ====================================================================================================

// function foo() {
//     return function baz() {
//         console.log(this)
//         return () => console.log(this)
//     }
// }

// const baz = foo().call({x: 10});
// baz.call({y: 20})

// 11 ====================================================================================================

// function foo(...rest) {
//     console.log(this, rest)
// }

// const bar = foo.bind({x: 10}, 20).bind({y: 30}, 40)

// bar()

//12 ====================================================================================================

// const map = Array.prototype.map.bind([10,20], v => console.log(v))

// map([30,40])

// 13 ====================================================================================================

// const a = Array.prototype.map.call("Hello World", (x) => x);
// console.log(a);

// 14 ====================================================================================================

// class User {
//     static x = 10

//     x = 20

//     someMethod = () => {
//         const x = 30
//         console.log(this.x)
//     }

//     do() {
//         const x = 40
//         setTimeout(this.someMethod, 0)
//     }
// }

// const x = 50

// const user = new User()
// const user2 = new User()

// user.do()

// console.log(user)

// console.log(user.someMethod === user2.someMethod)
// console.log(user.do === user2.do)

///////////////////////////////////////////////////////////////

// class User {
//     constructor(x) {
//         this.x =x
//     }

//     do = () => {
//         console.log(this.x)
//     }
// }

// const user = new User(2)
// const user2 = new User(22)
// user2.do()

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayName = () => {
//     console.log(this.name);
//   };

//   sayName1() {
//     console.log(this.name);
//   }
// }

// const john = new Person("John");
// john.sayName();
// john.sayName1();



// const obj = {
//   myName: "John",
//   sayName: () => {
//     console.log(this.myName);
//   },

//   sayName1() {
//     console.log(this.myName);
//   },
// };

// obj.sayName1();
// obj.sayName();

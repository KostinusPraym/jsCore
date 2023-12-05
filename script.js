// ================================================== 1 random

// const str = "h2h40h";
// console.log(
//   str
//     .split("h")
//     .map((s) => s + 10)
//     .filter((s) => s.length < 4)
// );

// ================================================== 2 ошибка

// var obj = {
//   a: () => {
//     console.log(this.prop);
//   },
//   prop: 1,
// };

// obj.a();
// var fn = obj.a.bind(obj);
// fn();

// 3 ================================================== 3 ошибка

// var x = 10;

// function bar(funArg) {
//   var x = 30;
//   funArg();
// }

// function foo() {
//   console.log(x)
// }

// foo.x = 20;
// bar.x = 40;

// bar(foo);

// 4 ================================================== 4 ошибка

// var a = "hello";

// function b() {
//   console.log(a);
//   var a = "world";
//   console.log(a);
// }
// b();

//5 ==================================================

// const s1 = ["a", "b", "c"];
// const s2 = ["d", "e", "f"];

// const result = s1.concat(s2).join("+");
// console.log(result);

// 7;
// const obj = {
//   x: 10,
//   y: 20,
// };

// const prop = Object.keys(obj).reverse().join("");

// obj.xy = 30;
// obj.yx = 40;
// obj.x10y20 = 50;
// obj.y20x10 = 60;

// console.log(obj[prop]);

//8  random
// const VALID_STATUSES = new Set();

// VALID_STATUSES.add("SUCCESS");
// VALID_STATUSES.add("FINAL");
// VALID_STATUSES.add("DONE");

// const people = [
//   { name: "Max", age: 20, status: "IN_PROGRESS" },
//   { name: "Sam", age: 21, status: "DONE" },
//   { name: "Dan", age: 30, status: "SUCCESS" },
// ];

// const peopleWithValidStatus = people
//   // ??
//   .map((item) => item.name);
// console.log(peopleWithValidStatus); //[Sam, Dan]

//9

// const res = [5, 7, 9].slice(1)
// res.pop()
// res.push(4)
// console.log(res)

//10
// let obj = {
//   "0": 1,
//   0: 2,
// };
// console.log(obj["0"] + obj[0])

//20 ошибка

// var a = "hello";
// function b() {
//   if (false) {
//     var a = "world";
//   } else {
//     var b = "man";
//   }
//   console.log(b);
//   console.log(a);
// }
// b();

//26 random

// var a = {};

// function b(a) {
//   a.a = 11;
//   a = null
// }
// b(a)
// console.log(a);

//additional

// 1 =============================================================================================

// for (let i = 0; i < 10; i++) {
//   setTimeout(function f() {
//     console.log(i);
//   }, 0);
// }

// 1.1 =============================================================================================

// let a = 0
// for (let i = a; a < 10; a++) {
//   setTimeout(function f() {
//     console.log(a);
//   }, 0);
// }

// 2 =============================================================================================

// const meetups = [
//     {name: "a", isActive: true, members: 100 },
//     {name: "b", isActive: true, members: 900 },
//     {name: "c", isActive: false, members: 600 },
//     {name: "c", isActive: true, members: 500 }
// ]

// const res = meetups.filter(meetup => meetup.isActive).reduce((sum, crnt) => {
//     return sum + crnt.members
// }, 0)

// console.log(res)
// 3 =============================================================================================
// let a = 10;
// a.a = 20;
// console.log(a);

// 3.1 =============================================================================================
// (без 'use strict')
// let a = 10;
// a.a = 20;
// console.log(a.a);

// 4 =============================================================================================
// console.log(0 || 1 && 2 || 3)

// 5 =============================================================================================

// setTimeout(function timeout() {
//   console.log("1");
// });

// Promise.resolve("2").then(console.log);

// console.log("3");

// 6 =============================================================================================

// const arr = [2, 4, 6];
// const res = arr.every((item) => item > 0);
// console.log(res);

// 6.1 =============================================================================================

// const arr = [2, 4, 6];
// const res = arr.some((item) => item > 3);
// console.log(res);

// 7 =============================================================================================

// const x = 10

// if(true) {
//     var y = 20
//     const z = 30
// }

// console.log(x, y, z)

// 8 =============================================================================================

// const obj = {};

// const obj2 = Object.assign(obj, { x: 20 });

// const obj3 = Object.assign({ y: 10 }, obj, { z: 30 });

// obj.h = 40;

// console.log(obj3);

// 9 =============================================================================================

// const obj = {}

// const x = {x: 10}
// const y = {y: 20}

// obj[x] = 10
// obj[y] = 20

// console.log(obj)

// 10 =============================================================================================

// const id = Symbol("id");

// const obj = {
//   foo: function () {},
//   x: 10,
//   str: "some",
//   bool: true,
//   obj1: {},
//   [id]: 123,
// };

// const a = JSON.stringify(obj);
// console.log(a);

//11 =============================================================================================

// const arr = [1, 2];
// const revArr = arr.reverse();
// revArr.push(3);

// const res = [
//     ...arr,
//     ...revArr
// ]

// console.log(res)

// 12 =============================================================================================

// const a = 21
// const b = "ок"
// const result = (a !== null && a !== undefined) ? a : b;
// console.log(result)

//====================

// let user;

// alert(user ?? "Аноним");

// 12 =============================================================================================

// const arr = [0, -1, "", "0", {}, { x: 0 }];

// const res = arr.filter(Boolean)

// console.log(res);
// console.log(typeof Boolean)

// 13 =============================================================================================

// function a(x, y, ...rest) {
//   console.log(rest);
// }

// a(1, 2, 3, 4, 5);

// 14 =============================================================================================

// const obj = { x: 10, y: 20 };

// const some = Object.entries(obj)
// console.log(some)

// const map = new Map(some)
// const value = map.get('x')

// console.log(value)

// 15 =============================================================================================

// function log(obj) {
//     console.log(obj)
// }

// function setName({user}) {
//     user.name = 'Max'
// }

// const user = {}

// log.user = user

// setName(log)
// log(user)

// 16 ===============================================================================================

// function foo() {
//   let x = 10;

//   function bar() {
//     console.log(x);
//   }

//   return bar;
// }

// let x = 20;

// const bar = foo();

// bar();

// 22 =====================================================================================

// function makeBook() {
//   let book = [];
//   let i = 0;
//   while (i < 10) {
//     const page = function () {
//       console.log(k);
//     };

//     book.push(page);
//     i++;
//   }

//   return book;
// }

// let reader = makeBook();
// reader[0]();
// reader[5]();

// 23 =======================================================================================

// function makeBook() {
//   let book = [];

//   for (let i = 0; i < 10; i++) {
//     function page() {
//       console.log(i);
//     }

//     book.push(page);
//   }

//   return book;
// }

// let reader = makeBook();
// reader[0]();
// reader[5]();

// 24 =================================================================================================

// function makeArmy() {
//   let shooters = [];

//   for (var i = 0; i < 10; i++) {
//     let shooter = function () {
//       // функция shooter
//       console.log(i); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // 0
// army[5](); // 5

// 24 =================================================================================================

// var f, g;
// function foo() {
//   var x;
//   f = function () {
//     return ++x;
//   };
//   g = function () {
//     return --x;
//   };
//   x = 1;
//   console.log("inside foo, call to f(): " + f());
// }
// foo();
// console.log("call to g(): " + g());
// console.log("call to g(): " + g());
// console.log("call to f(): " + f());
// console.log("call to f(): " + f());

// 25 =================================================================================================

// let num1 = 3;
// num1++; //
// let num2 = num1--; //
// console.log(num1++);
// console.log(--num2); //

// 27 =================================================================================================

// function foo(f) {
//     var a = 10

//     const bar = f.bind(null)

//     bar()
// }

// var a = 20

// function baz() {
//     console.log(a)
// }

// foo(baz)

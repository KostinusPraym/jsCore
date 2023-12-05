// function foo() {
//   const x = 10;
//   return {
//     x: 20,
//     bar: () => {
//       console.log(this.x);
//     },
//     baz() {
//       console.log(this.x);
//     },
//   };
// }

// const obj1 = foo();

// obj1.bar();
// obj1.baz();

// const obj2 = foo.call({ x: 30 });

// obj2.bar();
// obj2.baz();

//  =============================================================================================

// function foo() {
//   const x = 10;
//   return {
//     x: 20,
//     bar: () => {
//       console.log(this.x);
//     },
//     baz() {
//       console.log(this.x);
//     },
//   };
// }

// const obj1 = foo();

// obj1.bar();
// obj1.baz();

// const obj2 = foo.call({ x: 30 });

// obj2.bar();
// obj2.baz();


// 17 ===============================================================================================

// const obj = {
//   name: "Kostya",

//   foo: function () {
//     console.log(this);
//   },
// };

// setTimeout(obj.foo, 1);

// 19 ===================================================================================================

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }
// let user1 = makeUser.call({name: "lsss"});
// let user = makeUser();

// console.log(user.ref.name);
// console.log(user1.ref.name);

// 19.1 ===================================================================================================
// var a = 20

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// const obj = {
//   a: 21,
//   foo: makeUser,
// };

// const res = obj.foo();
// console.log(res.ref.a)

// 20 ===================================================================================================

// var doAny = () => console.log(this);

// const obj = {
//   name: "kostya",
//   logName: function () {
//     doAny();
//   },
// };

// obj.logName();

// 25 =================================================================================================

// function go() {
//   function bar() {
//     return () => console.log(this);
//   }

//   const obj = {
//     bar,
//   };

//   obj.bar()();
//   bar.call({ y: 10 })();
// }

// go();

// 25 =================================================================================================

// function f() {
    //   console.log(this.name);
    // }
    
    // f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
    
    // f();
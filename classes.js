// 1

// class Student{
//     constructor() {
//         this.a = 20
//     }
//     a = 40
//     static getName() {
//         return this
//     }
//     foo = () => {
//         console.log(this)
//     }
// }

// class Person extends Student {
//     constructor() {
//         super()
//         this.a = 233
//     }
// }

// const obj = new Person()

// obj.foo()

// 2

// class Person {
//   constructor(name) {
//     // console.log(this.__proto__ === ?)
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class Student extends Person {
//   constructor(name, age) {
//     super(name)
//     this.age = age;
//   }

//   getName() {
//     console.log(`my name is` + super.getName())
//   }
// }

// const max = new Student("Max", 20);
// max.getName()

// 3

// class Person {
//   constructor(name) {
//     // console.log(this.__proto__ === ?)
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class Student extends Person {
//   constructor(name, age) {
//     super(name)
//     this.age = age;
//   }
// }

// const max = new Student("Max", 20);

// 4

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

// function Student(name, age) {
//     // Person.call(this, name)
//     this.age = age;
// }

// const pr = Object.create(Person.prototype);

// Student.prototype = pr
// Student.prototype.constructor = Student

// const max = new Student("Kostya", 22);

// console.log(max.getName(), max.age)

// console.log(Person.prototype.__proto__ === Object.prototype )
// console.log(pr.constructor === Student)
// console.log(Student.prototype === pr)
// console.log(Person.prototype === max.__proto__.__proto__)
// console.log(pr.__proto__ === Person.prototype)
// console.log(Student.__proto__ === Function.prototype)
// console.log(max.__proto__ === pr)
// console.log(Person.prototype.constructor === Person)
// console.log(Person.__proto__ === Function.prototype)

// 5

// class A {
//   static x = 27;
//   static baz() {
//     console.log(this.y);
//   }

//   someMethod = (obj) => {
//     obj = {
//       x: 4,
//     };
//     console.log(A.x);
//   };

//   do() {
//     const x = 40;
//     setTimeout(this.someMethod, 0);
//   }
// }

// const x = 50;

// const a = new A();

// console.log(a.x)

// 6

// function A() {
// //   console.log("A.[[Call]] activated");
//   this.x = 10;
// }

// A.prototype.y = 20;

// var a = new A();

// console.log([a.x, a.y]);

// function B() {}

// B.prototype = new A();

// // B.prototype.constructor = B;

// var b = new B();

// console.log([b.x, b.y]);

// console.log(b)

// 7

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик");

// console.log(rabbit);

// 8

// class Animal {
//   name = "animal";

//   constructor() {
//     console.log(this);
//     console.log(this.name);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";
// }

// new Animal();
// new Rabbit();

// //  В Rabbit нет собственного конструктора, поэтому вызывается конструктор Animal.

// // Другими словами, родительский конструктор всегда использует своё собственное значение поля, а не переопределённое.

// 9

// class User {

//     constructor(name) {
//       // вызывает сеттер
//       this.name = name;
//     }

//     get name() {

//       return this._name;
//     }

//     set name(value) {
//       if (value.length < 4) {
//         console.log("Имя слишком короткое.");
//         return;
//       }
//       this._name = value;
//     }

//   }

//   let user = new User("Иван");
//   console.log(user.name);

//   user = new User("");

// 10

// function A() {}
// A.prototype.x = 10;

// var a = new A();
// console.log(a.x);

// // об-null-или явную ссылку
// // на конструктор "А"
// A = null;

// // но, можно создавать
// // объекты за счёт косвенной ссылки
// // из другого объекта, если
// // свойство .constructor не менялось
// var b = new a.constructor();
// console.log(b.x);

// // // удалим косвенную ссылку
// // // после этого `a.constructor` и `b.constructor`
// // // будут указывать на дефолтную функцию Object, а не на `A`
// delete a.constructor.prototype.constructor;

// console.log(a)
// // // больше объектов конструктора "А"
// // // не породить, однако, всё ещё
// // // существуют два таких объекта и
// // // им доступен прототип
// console.log(a.x);
// console.log(b.x);

// 11

// function A() {}

// var a = new A();
// A.prototype.x = 10;

// console.log(a.x);

// var __newPrototype = {
//   constructor: A,
//   x: 20,
//   y: 30,
// };

// // ссылка на новый объект
// A.prototype = __newPrototype;

// var b = new A();

// console.log(b.x);
// console.log(b.y);

// // "a" пока ссылается на
// // старый объект
// console.log(a.x);
// console.log(a.y);

// // меняем прототип явно
// a.__proto__ = __newPrototype;

// // теперь и "а" ссылается
// // на новый объект
// console.log(a.x);
// console.log(a.y);

// 12

// function A() {}

// A.prototype.x = 10;

// var a = new A();
// console.log(a.x);

// A.prototype = {
//   constructor: A,
//   x: 20,
//   y: 30
// };

// // // Ответ{
// //     // объект "а" ссылается на
// // // старый прототип, посредством
// // // внутренней ссылки [[Prototype]]
// // // }

// console.log(A.prototype)

// console.log(a.x)
// console.log(a.y)

// var b = new A();

// console.log(b.x);
// console.log(b.y)

// Пояснение {
//     Поэтому встречающиеся в некоторых статьях по JavaScript утверждения о том, что “изменение прототипа (полное изменение свойства .prototype конструктора) повлечёт за собой то, что все объекты будут иметь новый прототип” — неверно; новый прототип будут иметь не все, а только новые объекты.
// }

// 13

// function A() {}

// A.prototype.x = new Number(10);

// var a = new A();
// console.log(a.constructor.prototype);

// console.log(a.x);

// console.log(a.constructor.prototype.x);

// console.log(a.constructor.prototype.x === a.x);

// 14

// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// Person.prototype.getName = function() {
//     return this.name
// }

// // function newOp() {

// // }

// const person = newOp(Person, 'Max', 20) // {name: 'Max', age: 22}

// console.log(person)
// console.log(person.getName())

// 15



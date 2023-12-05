// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 2000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 3000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//   });

//////////////////////////////////////////////////

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(1);

//     new Promise((resolve, reject) => {
//       // (*)
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     // (**)

//     console.log(2);

//     new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(3);
//   });

//////////////////////////////////////////////////

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(1);

//     return new Promise((resolve, reject) => {
//       reject(TypeError("hello"));
//     });
//   })
//   .then(function (result) {
//     console.log(2);
//   })
//   .then(function (result) {
//     console.log(3);
//   })
//   .catch((e) => console.log(e.message));

//////////////////////////////////////////////////

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  console.log(a);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

const res = add1(20).then((v) => {
  console.log(v);
});

async function add2(x) {
  const a = resolveAfter2Seconds(20);
  const b = resolveAfter2Seconds(30);
  return x + (await a) + (await b);
}

add2(10).then((v) => {
  console.log(v);
});

// //////////////////////////////////////////////////

// const x = 30;
// const y = 20;

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// });

// const promise = new Promise((res) => {
//   setTimeout(() => {
//     foo(y);
//     res();
//   });
// });

// function foo(x) {
//   console.log(x);
//   return Promise.resolve(x);
// }

// foo(x).then(() => {
//   setTimeout(() => {
//     console.log(x);
//   }, 2000);
// });

// promise
//   .then((res) => {
//     console.log(res);
//     res * 2;
//   })
//   .then((res) => console.log(res));

//////////////////////////////////////////////////

// console.log("start");

// function returnPromise() {
//   console.log(1);
//   return new Promise((res) => {
//     console.log(3);
//     setTimeout(function () {
//       console.log(4);
//       res(21);
//       console.log(5);
//     }, 5000);
//   });
// }

// async function a() {
//   console.log(6);
//   const res = await returnPromise();
//   console.log(res);
// }

// a();

// console.log("end");

//////////////////////////////////////////////////

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

//////////////////////////////////////
// console.log(1);
// Promise.resolve(2)
//   .then((res) => {
//     console.log(res);
//     return res + 1;
//   })
//   .then((res) => console.log(res))
//   .then((res) => console.log(res));

// setTimeout(() => {
//   const a = new Promise((res) => {
//     setTimeout(() => {
//       res(16);
//     }, 3000);
//   });

//   a.then((res) => console.log(res));
// }, 2000);

// console.log(44);
//////////////////////////////////////

// console.log(1);

// async function foo() {
//   Promise.resolve(24).then((res) => console.log(res));
// }

// async function baz() {
//   const res = await new Promise(function (res) {
//     setTimeout(() => {
//       res(32);
//       console.log(6);
//     }, 1000);
//   });

//   return res;
// }

// Promise.reject(21)
//   .then((res) => console.log(res))
//   .finally((e) => console.log(e))
//   .catch((e) => console.log(e));

// console.log(99);

// setTimeout(() => {
//   new Promise((res) => {
//     setTimeout(() => {
//       baz()
//         .then((res) => console.log(res))
//         .finally(() => foo());
//     });
//   });
// }, 3000);

//////////////////

// async function test(list) {
//   var result = list.map(async function (el) {
//     console.log(el)
//   });
//   console.log(result);
//   return result;
// }

// test([2,4,12,5,6])

// const a = [Promise.resolve(1), Promise.reject(1), Promise.resolve(3)];

// Promise.all(a).then((res) => console.log(res));

// 1

// Promise.allSettled([
//   Promise.reject(1).then(console.log(1)),
//   Promise.resolve(2).then(() => console.log(2)),
//   Promise.resolve(2).then((res) => res + 22),
//   Promise.resolve(3).then(setTimeout(() => console.log(3), 4000)),
// ]).then((res) => console.log(res));

// 1 2 24 [1, undefined, 24, 3], 3

// Promise.all([
//   Promise.resolve(1).then(() => console.log(5)),
//   Promise.resolve(4).then(console.log(1)),
//   Promise.resolve(2).then(() => console.log(2)),
//   Promise.resolve(3).then(setTimeout(() => console.log(7), 4000)),
// ]).then((res) => console.log(res));

// 1, 5, 2 [undefined, 4, undefined, 3], 7

// function hasGetCleanMake(err) {
//   console.log(err)
// }

// function getPromise(resolve, reject) {
//   resolve(21);
// }

// Promise.allSettled([
//   new Promise((res) => {
//     console.log(1);
//     setTimeout(() => {
//       res(2);
//     }, 2000);
//   }).then(
//     function () {console.log(5)},
//     (err) => hasGetCleanMake(err)
//   ),
//   Promise.reject(3).catch(err => hasGetCleanMake(err)),
//   Promise.resolve(1).then(console.log(2)),
//   new Promise(getPromise).then((res) => console.log(res)),
// ]).then((res) => console.log(res));

// 1 2 3 21 5 [undefined, undefined, 1, undefined]

// 2

// const obj = {
//   a: 23,
// };

// function callback(resolve, reject) {
//   const baz = function (arg) {
//     const { a } = this;
//     if (a == arg) resolve([...arg]);
//   };
//   baz.call(obj, "23");
// }

// new Promise(callback)
//   .then((res) => {
//     console.log(Number(res) + 2);
//   })
//   .finally((e) => {
//     console.log(e);
//     return e;
//   })
//   .then((res) => console.log(res))
//   .finally(() => new Promise(callback).then(res => console.log(res + 2)))

// 3

// function doSomething(foo) {
//   setTimeout(() => {
//     console.log(1);
//   }, 300);
//   return foo();
// }

// function baz() {
//   return new Promise(function (res, rej) {
//     setTimeout(() => res(2), 400);
//   });
// }

// const doSomethingElse = () => {
//   return 21;
// };

// doSomething(baz)
//   .then(function () {
//     return doSomethingElse();
//   })
//   .then((res) => console.log(res));

//////////////////////////////////////////////

// function doSomething(foo) {
//   return new Promise((res, rej) => {
//     setTimeout(res(2), 300);
//   });
// }

// const doSomethingElse = () => {
//   Promise.resolve(3);
// };

// doSomething().then(doSomethingElse())
//   .then(res => console.log(res));

//////////////////////////////////////////////

// new Promise((res) => {}).then(console.log(1));

//////////////////////////////////////////////

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   2,
//   'hello'
// ];

// Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {

//   results.forEach((result, num) => {
//     if (result.status == "fulfilled") {
//       console.log(`${urls[num]}: ${result.value.status}`);
//     }
//     if (result.status == "rejected") {
//       console.log(`${urls[num]}: ${result.reason}`);
//     }
//   });
// }).catch(res => console.log(res))

// function resolveAfter2Seconds(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }

// async function add1(x) {
//   const a = await resolveAfter2Seconds(20);
//   const b = await resolveAfter2Seconds(30);
//   return x + a + b;
// }

// add1(10).then((v) => {
//   console.log(v); // prints 60 after 4 seconds.
// });

// async function add2(x) {
//   const a = resolveAfter2Seconds(20);
//   const b = resolveAfter2Seconds(30);

//   return x + (await a) + (await b);
// }

// add2(10)
// .then((v) => {
//   console.log(v); // prints 60 after 2 seconds.
// });

// 1-й промис
// const getToast = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Ваш тост готов!");
//     }, 1000);
//   });
// };

// // 2-й промис
// const getCoffee = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Ваш кофе готов!");
//     }, 2000);
//   });
// };

// // Ставим слово async
// const breakfast = async function () {
//   // Указываем await
//   const toast = await getToast();
//   // Указываем await
//   const coffee = await getCoffee();
//   // Получаем результат обоих промисов
//   const [myToast, myCoffee] = await Promise.all([toast, coffee]);
//   console.log(myToast, myCoffee);
//   // Ваш тост готов! Ваш кофе готов! (через 2сек)
// };
// breakfast();

// const breakfast = async function () {
//   try {
//     const toast = await getToast();
//     const coffee = await getCoffee();
//     const [myToast, myCoffee] = await Promise.all([toast, coffee]);
//     console.log(myToast, myCoffee);
//   } catch (err) {
//     // Обрабатываем ошибки
//     console.log(err);
//   }
// };

// breakfast();

// async function loadCities() {
//   const response = await fetch(
//     // адрес с ошибкой (citis вместо cities)
//     'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/citis.json'
//   );
//   const cities = await response.json();

//   return cities
// }

// function handleError(fn) {
//   console.log(fn);
//   return function () {
//     return fn().catch(function (err) {
//       console.log('Ошибка!!', err);
//     });
//   };
// }

// loadCities().catch(handleError)

// function sleep(ms) {
//   return new Promise((resolve, reject) => {
//     if (ms < 500) reject(Error(`мало сна`));
//     setTimeout(() => {
//       resolve(`спал ${ms} секунд`);
//     }, ms);
//   });
// }

// //////////////

//////////////////////////

// async function add1(x) {
//   const a = await resolveAfter2Seconds(20);
//   const b = await resolveAfter2Seconds(30);

//   return x + a + b;
// }

// add1(10).then(res => console.log(res))

// .then((v) => {
//   console.log(v); // prints 60 after 4 seconds.
// });

// function resolveAfter2Seconds(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }

// async function add2(x) {
//   const a = resolveAfter2Seconds(20);
//   const b = resolveAfter2Seconds(30);
//   return x + (await a) + (await b);
// }

// add2(10).then((v) => {
//   console.log(v); // prints 60 after 2 seconds.
// });

//////////////////////////

// Promise.reject("a")
//   .finally((p) => p + "e")
//   .catch((p) => {
//     console.log(p);
//     return p;
//   })
//   .catch((p) => p + "c")
//   .then((p) => {
//     console.log(p + "d");
//     return p + "d";
//   })
//   .finally(() => console.log(22))
//   .catch((p) => p + "c")
//   .then((p) => {
//     console.log(p);
//         return p;
//       })
//   .then((p) => p + "d")
//   .catch((p) => p + "c")
//   .finally((p) => console.log(p));

//21 верно
// async function bar() {
//     return Promise.resolve(10);
//   }

//   async function foo() {}

//   const res1 = foo();
//   const res2 = bar();

//   console.log(res1);
//   console.log(res2);

// 26 =================================================================================================
// (function () {
//   const log = () => console.log(this);
//   log();
// })();

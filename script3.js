// Array.prototype.myMap = function (callback) {

//     if(typeof callback !== 'function') {
//         throw TypeError(`must be used function in arguments`)
//     }

//     const res = []

//     for (let i = 0; i < this.length; i++) {
//         res.push(callback(this[i], i, this))
//     }
//    return res
// };

// const b = [432,4542,2].myMap(item => item + 23);

// console.log(b)


// const obj = {
//     a:23
// }
// const NameA = "8host"


// const newName = Array.prototype.map.call(NameA, eachLetter => {
// return `${eachLetter}a`
// })

// console.log(newName)

// const a = Array.prototype.map.call(NameA, function(i) {console.log(i)} )


// const aa = ['a'].map(function(i) {console.log(this)}, 'Hello')


// const arr = String.prototype.split.call("hello")
// console.log(arr)




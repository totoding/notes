
// function sum (...args){
//     return ((args[0] + args[args.length - 1])* args.length)/2
// }
// function getRandomArr(len){
//     const arr = []
//     for(let i = 0; i < len; i++){
//         arr.push(Math.ceil(Math.random()*100))
//     }
//     return arr
// }

// const arr = getRandomArr(8)

// console.log(sum(...arr))  


// const arr1 = [1,2,3,4]

// const arr2 = [...arr1]
// const arr3 = [...arr2,0,...arr1]
// console.log(arr3)

const obj1 = {
    a : "1",
    b : "2",
    c : "3"
}

// function test({a}){
//     console.log(a)
// }

// test(obj1)

let {a,b,c} = obj1

console.log(a)
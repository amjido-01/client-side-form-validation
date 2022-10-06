// let animals = ["cat", "dog", "monkey", "lizard"]

// let myAnimals = animals.includes("hen")
// // ["dog"]
// console.log(myAnimals);
let storage = [{"username":"bukhari","password":"1234D//y"}]
let userName = "khari"

// let isExist = storage.includes((item)=>{
//     return item.username == userName
// })
for (let i = 0; i < storage.length; ++i) {
    if (storage[i].username === userName) {
        console.log(`exist`)
    } else {
        console.log(`not exist`)
    }
}
// console.log(isExist)

// if (isExist) {
//     console.log(`exist`)
// } else {
//     console.log(`not`)
// }

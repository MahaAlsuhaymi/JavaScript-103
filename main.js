//Sychronous
/*
console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3)
}, 3000)
console.log(4);
console.log(5);
*/

//Asynchronous
/*
console.log('Start')
function userInfo(name){
    setTimeout( () => {
        console.log('** User info received **')
        return name
    }, 3000)
}

let userName = userInfo('Sara')
console.log(userName)
console.log('End')
*/

//Callback
/*
console.log('Start')
function userInfo(name, callback){
    setTimeout( () => {
        console.log('** User info received **')
        callback(name)
    }, 3000)
}

let userName = userInfo('Sara', name => {
    console.log(`Your name is ${name}`)
})
console.log('End')
*/

//Promise
/*
console.log('Start')
const newUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const userInfo = {
            name: 'Sara',
            age: 9
        }
        resolve(userInfo)
    }, 3000)
})

const addNewUser = userInfo => {
    let userAge = userInfo.age
    let adultAge;
    if (userAge >= 18){
        adultAge = `${userInfo.name} is an Adult`
        return Promise.resolve(adultAge)
    } else {
        adultAge = `${userInfo.name} is NOT an Adult`
        return Promise.reject(new Error(adultAge))
    }
}
newUser
    .then(addNewUser)
    .then(res => {
        console.log('** User info recived **')
        console.log(res)
    })

    .catch(err => {
        console.log(err.message)
    })

    console.log('End')
    */

//Destructuring
let ages = [25, 30, 32]
let [firstAge, secondAge, thirdAge] = ages
console.log(firstAge, secondAge, thirdAge)

let colors = ['Blue', 'Green', 'Black']
//let [firstColor, secondColor, thirdColor = 'Pink'] = colors
let [,,firstColor] = colors
console.log(firstColor)

let numbers = [1, 2, [3, 4]]
let [first, second, [firstValue, secondValue]] = numbers
console.log(first, second, firstValue, secondValue)

let num1 = 5, num2 = 7;
[num1, num2] = [num1, num1]
console.log(num1, num2)

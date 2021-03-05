const testArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];

//haz una función que coja un array y 
// lo mapee multiplicando todos los dígitos por 10
// haz una versión sin utilizar map y otra utilizando map

const multiply = (array) => {
    let array1 = []
    for (let i = 0; i < array.length; i++) {
        array1.push(array[i] * 10)
    } return array1
}
//console.log(multiply([1, 3, 4, 5, 6, 7, 8, 9, 10]))

const multiply2 = (array) => array.map(e => e * 10)

//console.log(multiply2([1, 3, 4, 5, 6, 7, 8, 9, 10]))

//Devolver array con números impares con y sin filter

const impares = (array) => {
    let arrayImp = []
    for (let el of array) {
        if (el % 2 !== 0) {
            arrayImp.push(el)
        }
    } return arrayImp
}
// console.log(impares(testArray))

const impares2 = (array) => array.filter(e => e % 2 !== 0)
// console.log(impares2(testArray))



//crea una funcion que te devuelva los elementos pares del array al cuadrado

const square = (array) => array.filter(e => e % 2 === 0).map(e => e * e)
// console.log(square([1, 3, 4, 5, 6, 7, 8, 9, 10]))

//Suma de elmentos del array con y sin reduce

// const suma = (array) => {
//     let acc = 0;
//     for (let el of array) {
//         console.log(acc, el)
//         acc += el
//         console.log(acc)
//         console.log("***********************")
//     }
//     return acc
// }

const arrrraraa = [1, 3, 4, 5, 6, 7, 8, 9, 10]
const suma = arrrraraa.reduce(function (acc, curr) {
    return acc + curr;
})

const trollArray = [
    { name: "frodo", age: 28 },
    { name: "sam", age: 28 },
    { name: "merry", age: 25 },
    { name: "pippin", age: 25 },
    { name: "gandalf", age: 130 }
]

// sumame la edad solo de los hobbits.
// Puedes utilizar map, filter y reduce.

const hobbitsAge = trollArray.map(e => e.age).filter(e => e < 130)
const hobbitsAgeAvg = Math.floor(hobbitsAge.reduce((acc, curr) => acc + curr) / hobbitsAge.length)

// console.log(hobbitsAgeAvg)


const randNumb = (x) => Math.floor(Math.random() * x)
console.log(randNumb())

const cuentaAtras = (num) => {
    const rand = randNumb(num)
    console.log(rand, "random!")
    for (let i = num; i > rand || i === 0; i--) {
        console.log(i)
    }
}
console.log(cuentaAtras(20))
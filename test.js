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
console.log(impares2(testArray))



//crea una funcion que te devuelva los elementos pares del array al cuadrado

const square = (array) => array.filter(e => e % 2 === 0).map(e => e * e)
console.log(square([1, 3, 4, 5, 6, 7, 8, 9, 10]))

//Suma de elmentos del array con y sin reduce

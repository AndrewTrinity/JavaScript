//Tipos de funciones en Javascript

//FUNCTION DECLARATION:
function greeting(name) {
    return `Hello ${name}`
}
greeting("fulano")


//FUNCTION EXPRESSION:
const square = function (number) {
    return number * number;
}

square(4)

const farewellV1 = (name) => {
    return `Goodbye ${name}`
}
// si solo tienes un parámetro/argumento no hace falta el parentesis
//si tu return es de una línea puedes omitir el return
const farewellV2 = name => `Goodbye ${name}`
//si tu funcion tiene más de un parámetro tienes que poner paréntesis
const suma = (a, b) => a + b

const array1 = [1, 2, 3, 4, 5];
const arrayMapeado = array1.map(function (el) {
    return el * 10;
});


const arrayMapeadoV2 = array1.map(el => el * 10)
// console.log(arrayMapeadoV2)

const array2 = [1, 5, 4, 6, 18, 15, 13, 12, 17, 14, 21, 9, 24]

const arrayMapeadoV3 = array2.filter(function (el) {
    return el % 3 === 0
})

// console.log(arrayMapeadoV3)
//num pares>10

const arrayMapeadoV4 = array2.filter(el => el % 2 === 0 && el > 10)
// console.log(arrayMapeadoV4)

const arrayMapeadoV5 = array2.filter(el => el % 3 !== 0 || el <= 13)
console.log(arrayMapeadoV5)

// map, filter, reduc


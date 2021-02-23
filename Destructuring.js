//ES6 destructuring
// const arr = ["fulano", "mengano", "camilo jose cela", "ortega cano", "pantoja"];

// //old style

// // let nombre1 = arr[0]
// // let nombre2 = arr[1]
// // let nombre3 = arr[2]

// //destructuring version

// let [nombre1, nombre2, nombre3] = arr;
// console.log(nombre1)
// console.log(nombre2)
// console.log(nombre3)
// //console.log(arayConElResto)

// const obj = {
//     name: "isabel",
//     lastName: "pantoja",
//     hijos: ["paquirrin", "no se como se llaman los otros"],
//     salvameDelux: true
// }

// let { name: nombre, lastName: apellido, hijos } = obj;

// console.log(nombre)
// console.log(apellido)

// let [hijo1] = hijos;

// console.log(hijo1)

const obj2 = {
    name: "fulano",
    lastName: "pataoskj",
    hobbies: ["bolos", "cerveza", "tabaco", "alcohol"],
    patologías: ["hipertension", "sobrepeso", "cirrosis"]
}

//Fulano pataosk es un enamorado de los bolos, pero debido a su sobrepeso y su hipertension, se queda los domingos en casa.

let { name, lastName, hobbies, patologías } = obj2;
let [hobby] = hobbies
let [patologia1, patologia2] = patologías

console.log(`${name} ${lastName} es un enamorado de los ${hobby}, pero debido a su ${patologia2} y ${patologia1}, se queda los domingos en casa`)
//1. Basic array methods;

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];

//PUSH, POP, SHIFT ,UNSHIFT

//2. Intermediate array methods: slice, splice

//SLICE te corta el array desde el index que le dices (y te devuelve la parte cortada);
//puedes pasar tb un segundo parámetro indicando el número de cosas que quieres cortar
const choppedParts = array1.slice(2, 4);
//console.log(choppedParts)

//SPLICE:
const frutas = ["manzana", "platano", "papaya", "papaya", "pera", "melocoton"];
frutas.splice(2, 1)
//const frutasConP = frutas.splice(1, 4, "naranja");
//console.log(frutasConP)
console.log(frutas)

//3.Advanced: filter,map,reduce,find,every,some.
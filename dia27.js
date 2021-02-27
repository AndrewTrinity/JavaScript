const array = [1, 2, 3, 4, 5, 6, 7];

// const maped = array.map(function (element) {
//     return element * 2;
// })

const maped = array.map(element => element * 2)

// const reduced = array.reduce(function (acc, curr) {
//     return acc + curr;
// })

// console.log(reduced)

const reduced = array.reduce((acc, curr) => acc + curr)


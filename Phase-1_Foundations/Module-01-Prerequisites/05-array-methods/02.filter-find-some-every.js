//01.filter

//find even numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = numbers.filter((n) => n % 2 === 0)
console.log('evenNum', evenNum)

//find products available in stocks
const products = [
    { id: 1, name: "Laptop", price: 1000, inStock: true },
    { id: 2, name: "Phone", price: 500, inStock: false },
    { id: 3, name: "Tablet", price: 800, inStock: true },
    { id: 4, name: "Monitor", price: 300, inStock: true },
];

let stock = products.filter((product) => product.inStock)
console.log('stock', stock)

//02. find --> single element

let numList = [1, 2, 3, 4, 5, 5, 6, 7, 9]
let evenNo = numList.find((n) => n % 2 === 0)
console.log(evenNo)

let pro = products.find((product) => product.price > 100)
console.log('pro', pro)

//03. findIndex --> finds index of the first element that satisfies the condition

let numIndex = numList.findIndex((n) => n % 2 === 0)
console.log('numIndex', numIndex)

let proIndex = products.findIndex((product) => product.price === 500)
console.log('proIndex', proIndex)

//04. some (at least one element satisfies the condition) --> return true or false

let num = [1, 2, 3, 4, 5]
let isOdd = num.some((n) => n % 2 !== 0)
console.log('isOdd', isOdd)

//05. every (all elements will satisfy the condition)
let isEven = num.every((n) => n % 2 === 0)
console.log('isEven', isEven)



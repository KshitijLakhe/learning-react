//Ex:1addition
let numbers = [1, 2, 3, 4, 5]

let addition = numbers.reduce((acc, currentVal) => {
    console.log(`acc:${acc}, currentVal:${currentVal}`)
    return acc + currentVal
}, 0)
console.log('addtion', addition) //addtion 15


//Ex:2calculate total bill
const cart = [
    { id: 1, name: "Laptop", price: 1000, quantity: 2 },
    { id: 2, name: "Phone", price: 500, quantity: 1 },
    { id: 3, name: "Tablet", price: 800, quantity: 3 },
];

let totalBill = cart.reduce((total, item) => {
    return total + item.price * item.quantity
}, 0)
console.log('totalBill', totalBill) //totalBill 4900
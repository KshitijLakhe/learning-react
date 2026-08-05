//chaining of methods

const order = [
    { id: 1, name: "Laptop", price: 1000, quantity: 2, status: "paid" },
    { id: 2, name: "Phone", price: 500, quantity: 1, status: "pending" },
    { id: 3, name: "Tablet", price: 800, quantity: 3, status: "paid" },
    { id: 4, name: "Monitor", price: 300, quantity: 1, status: "pending" },
];

//find total of paid order

let paidOrder = order
    .filter((item) => item.status === 'paid')
    .reduce((total, item) => total + item.price * item.quantity, 0)
console.log('total cost of paid order', paidOrder) //4400

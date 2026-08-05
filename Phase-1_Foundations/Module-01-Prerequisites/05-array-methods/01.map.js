
//parameters in map
let arr = [1, 2, 3, 4, 5]
let result = arr.map((num, i, arr) => `${i}  ${num}  ${arr}`)
console.log(result)


//basic transformation

let num = [1, 2, 3, 4, 5]
let squareNum = num.map((n) => n * n)
console.log(squareNum)


//transform array of object

let users = [
    { id: 1, name: 'vishal' },
    { id: 2, name: 'ketan' },
    { id: 3, name: 'kedar' }
]

let capitalizeUsernames = users.map((user) => ({ ...user, name: user.name.toUpperCase() }))
console.log('capitalizeUsernames-->', capitalizeUsernames)

//listItems

let listItems = num.map((n) => `<li>${n}</li>`)
console.log(listItems)
// output:['<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>4</li>', '<li>5</li>']


//Foreach

let resultForEach = num.forEach((n) => n * 2)
console.log(resultForEach) // Output: undefined (forEach does not return a new array, it returns undefined)

//foreach will iterate values
num.forEach((n) => console.log(n * 2))
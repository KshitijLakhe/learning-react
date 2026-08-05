//spread operator

//1.Array

//combine
let arrA = [1, 2, 3]
let arrB = [3, 4, 5]
console.log([...arrA, ...arrB])

//copy
let arrC = [...arrA]
console.log('arrC', arrC)

//insert elements 
let arrD = [0, ...arrA, 7]
console.log('arrD', arrD)

//Objects

//combine
let obj1 = { a: 1, b: 2 }
let obj2 = { c: 3 }
let obj3 = { ...obj1, ...obj2 }
console.log('obj3', obj3)

//copy
let obj4 = { ...obj1 }
console.log('obj4', obj4)

//insert properties
let user = { name: 'jon doe' }
let modifiedUser = { ...user, age: 27 }
console.log('modifiedUser', modifiedUser)
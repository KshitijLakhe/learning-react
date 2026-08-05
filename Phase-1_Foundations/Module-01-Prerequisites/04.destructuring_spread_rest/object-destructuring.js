let user = {
    name: 'vishal patil',
    age: 27,
    address: {
        street: 'More colony',
        city: 'Pune',
        country: 'India'
    },
    role: 'admin'

}

console.log('dot notation-->', user.age) //output:27
console.log('bracket notation-->', user['age']) //output:27


//Basic object destructuring
let { name, age, address } = user
console.log('name-->', name)
console.log('age-->', age)


//Nested Object destructuring
let { address: { street, city, country } } = user
console.log('city-->', city)


//Rename
let { name: userName, age: userAge, address: userAddress } = user
console.log('name-->', name)
console.log('userName-->', userName)


//Default values (use only when property is undefined)
let { role = 'guest', verified = false } = user
console.log('role-->', role) //output: admin  if null guest
console.log('verified-->', verified)


//method-1
function getNameFromObj(userInfo) {
    return userInfo.name
}
console.log('getNameFromObj-->', getNameFromObj(user))

//method-2
function getNameWithDes({name}){
return name
}
console.log('getNameWithDes-->',getNameWithDes(user))

function getUser({name,age,address:{street,city,country}}){
return `Name:${name},Age:${age}: Address:${street} ${city} ${country}`
}
console.log('getUser-->',getUser(user))
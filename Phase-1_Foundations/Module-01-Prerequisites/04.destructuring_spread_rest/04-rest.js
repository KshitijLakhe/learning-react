
let props = {
    variant:'primary',
    size:'lg',
    disabled:false,
    onclick: ()=> console.log('button clicked')
}
 
const {variant,size,...otherProps} = props
console.log('variant',variant),
console.log('size',size)
console.log('otherProps',otherProps)

//function

function greeting(greet,timeZone,...names){
console.log(greet),
console.log('names',names)
return `${greet}! ${timeZone}! ${names[0]} and ${names[1]} `

}
let message = greeting('Hello','Good Morning','ketan','vishal')
console.log(message)


//array
let colors = ['red','blue','pink','white']
let [red,...otherColors] = colors
console.log(otherColors)

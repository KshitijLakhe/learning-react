let rgb = [255, 200, 0]
console.log(rgb[0])

//basic array destructuring
// let [red,green,blue] = rgb
// console.log(red)

//skip elements
// let [,,blueColor] =rgb
// console.log('color',blueColor)

//rest
// let [reddish,...restColor] = rgb
// console.log('reddish',reddish)
// console.log('restColor',restColor)

//default 
// let [red, green, blue, orange = 1] = rgb
// console.log('red', red)
// console.log('orange', orange)

//swapping values
let a = 15;
let b = 10;
[a, b] = [b, a]
console.log(a, b)

//swapping with temp var
let x = 10
let y = 25
let val = x
x = y
y = val
console.log(x, y)
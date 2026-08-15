import { useState } from 'react'

function Counter1() {
  let num = 0
  const handleAdd = () => {
    num += 1
    console.log('number', num)
  }
  return (
    <>
      <h4>Counter:1</h4>
      <p>Number:{num}</p>
      <button onClick={handleAdd}>Add</button>
    </>
  )
}

function Counter2() {
  //useState initial value returns [current value setter function]
  // console.log(useState(0))
  const [count, setCount] = useState(0)


  const handleClick = () => {
    setCount(count + 1)
    console.log('count', 1)
  }
  return (

    <>
      <h4>Counter:2</h4>
      <p>Count:{count}</p>
      <p>{str}</p>
      <button onClick={handleClick}>Add 1</button>
    </>
  )
}
function StateBasic() {
  return (
    <>
      <Counter1 />
      <Counter2 />
    </>
  )
}

export default StateBasic
import React, { useState } from 'react'

function StateNumber() {
    const [count, setCount] = useState(0)
    const handleIncrement = () => { setCount(count + 1) }
    const handleDecrement = () => { setCount(count - 1) }

    const handleIncrementBy3 = () => {
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1) //expected output:0 3 6 9

        //Fix
        setCount((prev) => prev + 1) // 0 -> 1
        setCount((prev) => prev + 1) // 1 -> 2
        setCount((prev) => prev + 1) // 2 -> 3
        

    }
    return (
        <>
            <h4>State Number</h4>
            <p>{count}</p>
            <button onClick={handleDecrement} style={{ margin: '0 10px', padding: '5px 25px' }}>-1</button>
            <button onClick={handleIncrement} style={{ margin: '0 10px', padding: '5px 25px' }}>+1</button>
            <button onClick={handleIncrementBy3} style={{ margin: '0 10px', padding: '5px 25px' }}>+3</button>
        </>
    )
}

export default StateNumber
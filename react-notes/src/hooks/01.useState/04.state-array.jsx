import React, { useState } from 'react'
function StateArray() {
    const [text, setText] = useState("")
    const [items, setItem] = useState(['React'])
    const handleAddItem = () => {
        setItem((prev) => [...prev, text])
        setText("")
    }
    return (
        <>
            <h4>StateArray</h4>
          
            <input type="text"
                placeholder='enter new value'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddItem} style={{ margin: '0 15px' }}>Add Item</button>

            <ul>
                {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </>
    )
}

export default StateArray
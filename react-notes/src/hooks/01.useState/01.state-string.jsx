import React, { useState } from 'react'

function StateString() {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }
    return (
        <>
            <h4>State String</h4>

            <input type="text" onChange={handleChange} value={text} />
            <p>Text:{text}</p>
            <p>Text Characters:{text.length}</p>

        </>
    )
}

export default StateString
import React, { useState } from 'react'

function StateBoolean() {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle((prev)=> !prev)
    }
    return (
        <>
            <h4>StateBoolean</h4>
            <button onClick={handleClick}>{toggle ? 'Power off' : 'Power on'}</button>
            <p>
                {toggle ? 'Laptop is charging' : 'Laptop is not charging'}
            </p>
        </>
    )
}

export default StateBoolean
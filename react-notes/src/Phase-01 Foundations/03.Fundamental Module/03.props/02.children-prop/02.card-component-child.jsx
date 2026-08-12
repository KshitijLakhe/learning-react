import React from 'react'

//children :built-in-prop
function Card({ children }) {
    console.log('children', children)
    return (
        <div style={{
            border: '1px solid #8f8888',
            padding: '10px', margin: '10px',
            borderRadius: '10px'
        }}>
{children}

        </div>
    )
}

export default Card
import React, { useState } from 'react'

function Ternary() {
    const [showCard, setshowCard] = useState(true)
    const cardStyle = {
        height: '25vh',
        width: '25vw',
        padding: '16px',
        marign: '10px',
        borderRadius: '15px',
        backgroundColor: '#81c8da',
    
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    }
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
      
    }
    return (
        (
            <>
            <h3 style={{textAlign:'center'}}>Condition redering with Ternary Operator</h3>
                <div style={centerStyle}>
                    {showCard ? <div style={cardStyle}></div> : null}
                </div>
                <div style={centerStyle}>
                    <button onClick={() => setshowCard((prev) => !prev)}>{showCard ? 'Hide' : 'Show'}</button>
                </div>
            </>
        )
    )
}

export default Ternary
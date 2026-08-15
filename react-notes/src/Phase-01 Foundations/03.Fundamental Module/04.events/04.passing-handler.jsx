import React from 'react'

//props ->  passding data parent --> child
// let props = {label:'click,padding:'5px 15px'}
//let {label:'click,padding:'5px 15px'} = props

function Button({ label, padding, onClick }) {

    return (
        <button
            style={{ padding: padding }}
            onClick ={onClick}
        >
            {label}
        </button>
    )
}
function PassingHandler() {
    return (
        <Button label='click' padding='5px 15px' onClick={() => alert('hi')}></Button>
    )
}

export default PassingHandler
import React from 'react'

function EventObject() {
    const handleClick = (e) => {
        console.log('event object-->', e)
        console.log('button text-->', e.target.textContent)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('form is submitted..')
    }
    return (
        <>
            <button onClick={handleClick} style={{ margin: '10px 0' }}>Event Object</button>

            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button type='submit' style={{ margin: '0 10px' }}>submit</button>
            </form>
        </>
    )
}

export default EventObject
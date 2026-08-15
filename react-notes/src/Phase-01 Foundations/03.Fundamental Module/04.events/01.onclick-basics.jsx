//onClick --> responding to click
//camleCase props --> onClick, onMouseEnter
function OnClickBasics() {
    const handleClick1 = () => {
        console.log('button is clicked')
        alert(`hi world`)
    }

    const handleClick2 = (user) => {
        console.log('button is clicked')
        alert(`hi ${user}`)
    }

    return (
        <>
            {/* Named Handler */}
            <button onClick={handleClick1}>click1</button>
            <button onClick={() => handleClick2('Jon')}>click2</button>

        </>
    )
}
export default OnClickBasics
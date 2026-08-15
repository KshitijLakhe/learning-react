function OnChangeEvent() {
    const handleChange = (e) => {
        console.log('current value', e.target.value)
    }

    const handleCheckBox = (e) => {
        console.log('checked value', e.target.checked)
    }

    return (
        <>
      
            <div style={{ margin: '10px 0' }}>
                {/* onChange */}
                <label htmlFor="inputTag" style={{ margin: '10px 10px' }}>Text</label>
                <input type="text" onChange={handleChange} id='inputTag' />
            </div>

            <div>
                {/* checkbox */}
                <label htmlFor="check" style={{ margin: '0 10px' }}>Yes</label>
                <input type="checkbox" onChange={handleCheckBox} id='check' />
            </div>

        </>
    )
}
export default OnChangeEvent
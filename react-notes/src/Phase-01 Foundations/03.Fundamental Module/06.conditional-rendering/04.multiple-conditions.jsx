import { useState } from 'react'

function MultipleConditions() {
    const [status, setstatus] = useState('loading')

    const renderContent = () => {
        switch (status) {
            case 'loading': return <p>Loading...</p>
            case 'success': return <p>Data fetched successfully!</p>
            case 'error': return <p>Failed to fetch data**</p>
            default: return null
        }
    }
    return (
        <>
            <h3>MultipleConditions</h3>
            <button onClick={() => { setstatus('loading') }} >loading</button>
            <button style={{ margin: '0px 5px' }} onClick={() => { setstatus('success') }} >success</button>
            <button onClick={() => { setstatus('error') }} >error</button>

            <div>
                {renderContent()}
            </div>
        </>
    )
}

export default MultipleConditions
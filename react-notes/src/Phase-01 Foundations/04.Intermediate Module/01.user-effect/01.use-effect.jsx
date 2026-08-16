import { useEffect, useState } from 'react'

//useEffect (fn,[])     --> Run -> run after every render
//useEffect (fn,[])     --> Mount: run once after first paint
//useEffect (fn,[count])--> update: run on mount whenever count changes
//                      --> unmount:(disappers) -->used to stop timer or remove listners

//Development -> mount -> update-> umount -> mount 


function Counter() {
    const [count, setcount] = useState(0)

    // useEffect(() => {
    //     console.log('Run:Runs on every render')
    // })

    // useEffect(() => {
    //     console.log('Mount:Counter is mounted')
    // }, [])

    // useEffect(() => {
    //     console.log(`Update:Counter is updated | Count:${count}`)
    // }, [count])

    //unmount
    useEffect(() => {
        console.log('Mount:counter is mounted')
        return () => {
            console.log('Unmount:counter is removed')
        }
    }, [])



    return (

        <>
            <h3 style={{ textAlign: 'center' }}>Counter Component</h3>
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px',
                backgroundColor: 'lightblue', border: '1px solid #4b434300',
                boxShadow: '2px 2px 2px 2px #e0d4d4c9',
            }}>

                <button onClick={() => setcount((c) => c - 1)}>    Decrement       </button>
                <p style={{ margin: "0 15px" }}  >Count:{count}</p>
                <button onClick={() => setcount((c) => c + 1)}>          Increment</button>
            </div>
        </>
    )
}

const CounterExample = () => {
    const [showcounter, setshowcounter] = useState(true)

    return (
        <>
            <button onClick={() => setshowcounter((p) => !p)}>{showcounter ? "unmount" : "mount"}</button>
            {showcounter && <Counter />}
        </>
    )
}

export default CounterExample
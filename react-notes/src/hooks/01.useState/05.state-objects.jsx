import { useState } from "react"


function StateObject() {
    const [userInfo, setUserInfo] = useState({ username: '', age: '' })

    const handleChange = (e) => {
        const { name, value } = e.target //we get element {name:'',value:''}
        console.log('e.target', e.target)
        console.log('name', name)
        console.log('value', value)
        //prev --> {username:'',age:''} (initially)
        // setUserInfo((prev)=>({...prev,[name]:value}))
        setUserInfo((prev)=>{return {...prev,[name]:value}})
    }
    return (
        <>

            <h3>STATE OBECT</h3>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" onChange={handleChange} value={userInfo.username} name="username" id="username" />
            </div>

            <div style={{ margin: '15px 0' }}>
                <label htmlFor="age">age</label>
                <input type="text" onChange={handleChange} value={userInfo.age} name="age" id="age" />
            </div>

            <div>
                <p>user:{userInfo.username}-{userInfo.age}</p>
            </div>
        </>
    )
}

export default StateObject
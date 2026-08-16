import {useState} from 'react'

function DisplayMessage({isLoggedn}){
if(!isLoggedn){
return <p>Please Log in first</p>
}
return <p>Welcome Message!</p>
}
function EarlyReturn() {
    const [isLoggedn, setisLoggedn] = useState(false)
  return (
  <>
  <h3>
    EarlyReturn
  </h3>
  <button onClick={()=>{setisLoggedn((prev)=> !prev)}}>{isLoggedn ? 'Log Out':'Log In'}</button>
  <DisplayMessage isLoggedn={isLoggedn}/>
  </>
  )
}

export default EarlyReturn
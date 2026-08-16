import React, { useEffect, useState } from 'react'

function DataFetching() {


  const [user, setuser] = useState(null)
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(null)

  useEffect(() => {
    async function loadUsers() {

      try {
        setloading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await res.json()
        console.log(data)
        setuser(data)
      } catch (error) {
        seterror(error.message)
      } finally {
        setloading(false)
      }
    }
    setTimeout(() => {
      loadUsers()
    }, 1000);
  }, [])



  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }} >Error:{error}</p>

  return (
    <>
      <h3>DataFetching</h3>

      <p>Name:{user?.name}</p>
      <p>Username:{user?.username}</p>
      <p>Email:{user?.email}</p>


    </>
  )
}

export default DataFetching
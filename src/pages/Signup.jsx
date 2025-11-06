import React, { useState } from 'react'

export default function Signup() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allUsers, setAllUsers] = useState([])

  const handleSubmit = () =>{

    let userInfo = {
      firstName, lastName, email, password
    }

    let newAllUsers = [...allUsers, userInfo]
    setAllUsers(newAllUsers)
    console.log(newAllUsers)

    
  }

  const handleDelete = (index)=>{
    // const filterUser = allUsers.filter((others,i)=>i !=index)
    const spliedUser = allUsers.slice(index, 1)
    setAllUsers(spliedUser)
    // setAllUsers(filterUser)
  }

  return (
    <>
      <form >
        <h1>Register Here</h1>
        <input type="text" placeholder='First name' id='firtname' onChange={(e)=>{setFirstName(e.target.value)}} />
        <input type="text" placeholder='Last name' id='lastname' onChange={(e)=>{setLastName(e.target.value)}} />
        <input type="email" placeholder='email' id='emaill' onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='Password' id='passwordd' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>

      {
        allUsers.map((user, index)=>(
          <div key={index}>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
            <h1>{user.email}</h1>
            <h1>{user.password}</h1>
            <button onClick={()=>handleDelete(index)}>delete</button>
          </div>
        ))
      }
    </>
  )
}

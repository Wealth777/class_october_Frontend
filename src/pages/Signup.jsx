import React, { useState } from 'react'
import '../Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function Signup() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allUsers, setAllUsers] = useState([])
  const [showPassword, setShowPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userInfo = {
      firstName,
      lastName,
      email,
      password
    }

    try {
      await axios.post('https://class-backend-jjl5.onrender.com/user/register', userInfo)
      // console.log('Successful:', res.data)
      navigate('/signin')
    } catch (err) {
      console.log('Error Signing up:', err.response ? err.response.data : err)
    }

    const updatedList = [...allUsers, userInfo]
    setAllUsers(updatedList)
  }

  const handleDelete = (index) => {
    const updatedList = allUsers.filter((_, i) => i !== index)
    setAllUsers(updatedList)
  }

  return (
    <>
      <div className="signup-container">

        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Register Here</h1>

          <input
            type="text"
            placeholder="Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <input
              type={showPassword ? 'text' : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </span>
          </div>

          <button type="submit">Submit</button>
        </form>

        <div className="users-list">
          {allUsers.map((user, index) => (
            <div className="user-card" key={index}>
              <p><strong>First Name:</strong> {user.firstName}</p>
              <p><strong>Last Name:</strong> {user.lastName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Password:</strong> {user.password}</p>

              <button className="delete-btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

import React, { useState } from 'react'
import '../SignIn.css'
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [showpassword, setShowpassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('')
    const userInfo = { email, password }
    try {
      await axios.post('https://class-backend-viue.onrender.com/user/login', userInfo)
      alert('Successful')
    } catch (err) {
      console.log(err.response ? err.response.data : err)
      setError(`Error occur: ${err.response ? err.response.data : err}`)
      alert('error')
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        {error && <div className="error-box">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div>
              <input
                type={showpassword ? 'text' : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowpassword(!showpassword)}>
                {showpassword ? <FaEyeSlash/> : <FaEye/>}
              </span>
            </div>
          </div>

          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <p className="signup-text">Don’t have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

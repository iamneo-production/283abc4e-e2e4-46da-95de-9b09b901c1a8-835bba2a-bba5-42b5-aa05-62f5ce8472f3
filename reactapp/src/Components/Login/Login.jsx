import React, { useState } from 'react';
import './Login.css';
import backgroundImage from './login-background.jpg';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useSelector } from 'react-redux';

function Login() {
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  console.log(users);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { username, password } = formData;
  
    // Check if username and password are not empty
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }
  
    const userExists = users.some((user) => user.email === username);
    const user = users.find((user) => user.email === username);
  
    // Check if the user exists
    if (!userExists) {
      alert("User not found. Please sign up.");
      return;
    }
  
    // Check if the entered password is correct
    if (user.password !== password) {
      alert("Invalid password");
      return;
    }
  
    // Login successful
    console.log("Login Successful");
    navigate('/');
  };
  
  return (
    <div className="login-page">
      <div className='login-main-box'>
        <div className="login-container">
          <h1>LOG IN</h1>
          <div className='login-box'>
            <div className="login-username-box">
              <input type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required/>
              <label>Email</label>
            </div>
            <div className="login-password-box">
              <input type="password" 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required/>
              <label>Password</label>
            </div>
            <div className='login-bottom'>
              <div className='login-inner-bottom-1'>
                <div className='login-button-box'>
                  <input type='button' onClick={handleLogin} value='Login' />
                </div>
                <div className='login-forgot-pass'>
                  <p>Forgot Password?</p>
                </div>
              </div>
              <div className='login-inner-bottom-2'>
                <div className='login-Dont'>
                  <p>Don't have an account?</p>
                </div>
                <div className='login-button-box-reg'>
                  <input type='button' onClick={() => navigate('/signup')} value='Register Now' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-image-container">
        <img src={backgroundImage} alt="Login" />
      </div>
    </div>
  );
}

export default LoadingPage(Login);
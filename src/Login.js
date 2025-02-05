import logo from './logo1.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import React from 'react';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const loginNav = () => {
        navigate('/bors');
    }
    const signUpNav = () => {
        navigate('/signup');
    }
  return (
      <div className="background">
        <div className="bottom-half"></div>
        <img src={logo} alt="Logo" className="logo" />
        <div className="bottomStuff">
          <p className="bodyText">
            Welcome to Husky Marketplace! Login below or create an account if you don't have one.
          </p>
          <input type="email" placeholder="Enter email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button className="button" onClick={loginNav}>Login</button>
          <p className="footer">
              Don’t have an account?{' '}
              <span className="link" onClick={signUpNav} style={{ cursor: 'pointer', color: '#6c63ff', textDecoration: 'underline' }}>
                        Sign Up
              </span>
          </p>
        </div>
      </div>
  );
};

export default Login;

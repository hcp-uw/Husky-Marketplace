import logo from './logo1.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    // State to track email & password
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(false); // Tracks if form submission fails

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Check if both fields are filled
    const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

    const loginNav = () => {
        if (isFormValid) {
            navigate('/SearchMain'); // Navigate only if fields are valid
        } else {
            setError(true); // Show error message
        }
    };

    const signUpNav = () => {
        navigate('/signup');
    };

    return (
        <div className="background">
            <div className="bottom-half"></div>
            <img src={logo} alt="Logo" className="logo" />
            <div className="bottomStuff">
                <p className="bodyText">
                    Welcome to Husky Marketplace! Login below or create an account if you don't have one.
                </p>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className={`input ${error && !formData.email.trim() ? 'error-input' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`input ${error && !formData.password.trim() ? 'error-input' : ''}`}
                    value={formData.password}
                    onChange={handleChange}
                />

                {/* Show error message only when Login is clicked with incomplete fields */}
                {error && !isFormValid && (
                    <p className="bodyText error-message">Please enter both email and password!</p>
                )}

                <button className="button" onClick={loginNav}>Login</button>

                <p className="footer">
                    Don’t have an account?{' '}
                    <span className="link" onClick={signUpNav}
                          style={{ cursor: 'pointer', color: '#6c63ff', textDecoration: 'underline' }}>
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;

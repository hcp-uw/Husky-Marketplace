import logo from './logo1.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();

    // State to track form inputs
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        isChecked: false
    });

    const [error, setError] = useState(false); // Tracks if form submission failed

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Check if all fields are filled and checkbox is checked
    const isFormValid =
        formData.email.trim() !== '' &&
        formData.username.trim() !== '' &&
        formData.password.trim() !== '' &&
        formData.isChecked;

    const handleSignUpClick = () => {
        if (isFormValid) {
            navigate('/login');
        } else {
            setError(true); // Show error message only if form is invalid
        }
    };

    return (
        <div className="background">
            <div className="bottom-half"></div>
            <img src={logo} alt="Logo" className="logo" />
            <div className="bottomStuff">
                <p className="bodyText">
                    Welcome to Husky Marketplace! Please enter an email, username, and password:
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
                    type="text"
                    name="username"
                    placeholder="Username"
                    className={`input ${error && !formData.username.trim() ? 'error-input' : ''}`}
                    value={formData.username}
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
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="isChecked"
                        checked={formData.isChecked}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <span className="bodyText">I am at least 18 years old.</span>
                </div>

                {/* Show error message only when the button is clicked with incomplete fields */}
                {error && !isFormValid && (
                    <p className="bodyText error-message">Please fill out all fields!</p>
                )}

                <button
                    className="button"
                    onClick={handleSignUpClick}
                >
                    Sign Up
                </button>

                <p className="footer">
                    Already have an account?{' '}
                    <span className="link" onClick={() => navigate('/login')}
                          style={{ cursor: 'pointer', color: '#6c63ff', textDecoration: 'underline' }}>
                        Log In
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignUp;

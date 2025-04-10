import logo from './logo1.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from ".//lib/firebase"
import { setDoc,doc } from "firebase/firestore"
import { toast } from "react-toastify"

const Login = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true);
        const formData = new FormData(e.target);
        const{ email,password} = Object.fromEntries(formData);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            loginNav();
        } catch (err) {
            console.log(err)
            toast.error(err.message)
            console.log("here")
        } finally {
            setLoading(false)
        }
    }
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
    //const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

    const loginNav = () => {
        
            navigate('/SearchMain'); // Navigate only if fields are valid
        
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
                <form className = "login-form" onSubmit={handleLogin}>
                    <input type = "text" placeholder="Email" name = "email" />
                    <input type = "password" placeholder="Password" name = "password" />
                    <button disabled = {loading}> {loading? "Loading" : "Login"}</button>
                </form>
                

                {/* Show error message only when Login is clicked with incomplete fields */}
                {/* {error && !isFormValid && (
                    <p className="bodyText error-message">Please enter both email and password!</p>
                )} */}

                

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

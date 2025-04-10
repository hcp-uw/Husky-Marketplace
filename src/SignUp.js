import logo from './logo1.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from ".//lib/firebase"
import { setDoc,doc } from "firebase/firestore"
import { toast } from "react-toastify"
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    // State to track form inputs
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        isChecked: false
    });

    const [error, setError] = useState(false); // Tracks if form submission failed

    const handleRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.target);
        const{ username, email,password} = Object.fromEntries(formData);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                id: res.user.uid,
                blocked: [],

            });

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: [],
            });

            toast.success("Account Created! You can login now!")
            navigate('/login');
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        } finally {
            setLoading(false);
        }
    }

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
                <form className = "signup-form" onSubmit={handleRegister}>
                    <input type = "text" placeholder="Username" name = "username" />
                    <input type = "text" placeholder="Email" name = "email" />
                    <input type = "password" placeholder="Password" name = "password" />

                    <button disabled = {loading}> {loading? "Loading" : "Sign Up"}</button>
                </form>
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

                {/* <button
                    className="button"
                    onClick={handleSignUpClick}
                >
                    Sign Up
                </button> */}

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

import logo from './logo1.png';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Adjust the import path based on your file structure
import BorS from './BorS'; // Import the new page component
import SignUp from './SignUp';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/bors" element={<BorS />} />
                <Route path="/signup" element={<SignUp />} /> {/* Add the SignUp route */}
            </Routes>
        </Router>
    );
};

export default App;



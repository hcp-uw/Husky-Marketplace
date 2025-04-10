import logo from './logo1.png';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Adjust the import path based on your file structure
import BorS from './BorS'; // Import the new page component
import SignUp from './SignUp';
import SearchMain from './SearchMain'
import SellMain from './SellMain'
import Notification from "./components/notification/Notification"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"
import { useUserStore } from "./lib/userStore"

const App = () => {
    const { currentUser, isLoading, fetchUserInfo } = useUserStore();



  useEffect(() => {
    const unSub = onAuthStateChanged(auth,(user) => {
      fetchUserInfo(user?.uid);
    })

    return () => {
      unSub();
    }
  }, [fetchUserInfo]);
    return (

        <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/SearchMain" element={<SearchMain />} />
                    <Route path="/signup" element={<SignUp />} /> {/* Add the SignUp route */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/sell" element={<SellMain />} />
                </Routes>
            </Router>
        
    );
};

export default App;



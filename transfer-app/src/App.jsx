import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Preloader from './components/Preloader';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import TransferForm from './components/TransferForm';
import './App.css';
import Footer from './components/Footer';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, [2000]);


  return () => clearTimeout(timer);
  });
  const PrivateRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/signin" /> ;

    }else{
      return children;
    }
  };
  return (
    <Router>
      <div className="App">
        {loading ? <Preloader /> : null}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route
            path="/transfer"
            element={
              <PrivateRoute>
                <TransferForm />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

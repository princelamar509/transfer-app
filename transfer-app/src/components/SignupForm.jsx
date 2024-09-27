import React from 'react';
import './SignupForm.css';

const SignUp = () => {
  return (
    <div className="form-page">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form className="form-div ">
          <div className="form-grup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-div">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-div">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button className="btn" type="submit" onClick={() => alert('Sign up successful!')}>Sign Up</button>
          <div className="signup-link">
            Already have an account? <a href="/signin">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


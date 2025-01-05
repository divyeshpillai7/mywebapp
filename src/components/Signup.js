import {React, useState} from 'react';
import Navbar from './Navbar';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('User signed up with Google');
    } catch (error) {
      setError(error.message);
    }
  };
    return (
      <>
      <Navbar/>
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="logo">POSTAI</h1>
          <h2>Create an account</h2>
          <p>Sign up to start using the platform.</p>
          <button className="google-login" onClick={handleGoogleSignUp}>Sign up with Google</button>
          <div className="divider">
            <span>or</span>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSignUp}>
            <input type="text" placeholder="Your Name" value={name}
              onChange={(e) => setName(e.target.value)}
              required  />
            <input type="email" placeholder="Your Email" value={email}
              onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="login-btn">Sign Up</button>
          </form>
          <p className="bottom-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
        <style>{`
        .auth-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f9f9f9;
          background: linear-gradient(to bottom right, #4b0b6a, #ffffff);
          font-family: Arial, sans-serif;
        }
        .auth-card {
          width: 350px;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .logo {
          font-size: 1.8em;
          font-weight: bold;
          color: #8709F6;
          margin-bottom: 10px;
        }
        h2 {
          margin: 10px 0;
        }
        p {
          color: #555;
          font-size: 0.9em;
        }
        .google-login {
          width: 100%;
          padding: 10px;
          border: none;
          background: #8709F6;
          color: white;
          font-size: 1em;
          border-radius: 5px;
          margin-bottom: 15px;
          cursor: pointer;
        }
        .divider {
          margin: 10px 0;
          display: flex;
          align-items: center;
          color: #aaa;
        }
        .divider span {
          margin: 0 10px;
        }
        .divider:before,
        .divider:after {
          content: "";
          flex: 1;
          height: 1px;
          background: #ddd;
        }
        form input {
          width: calc(100% - 20px);
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .forgot-password {
          color: #007bff;
          font-size: 0.8em;
          display: block;
          margin-bottom: 10px;
        }
        .login-btn {
          width: 100%;
          padding: 10px;
          background: #8709F6;
          color: white;
          font-size: 1em;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .bottom-text,
        .help-text {
          font-size: 0.85em;
          margin-top: 15px;
        }
        .bottom-text a,
        .help-text a {
          color: #007bff;
          text-decoration: none;
        }
      `}</style>
      </div>
      </>
    );
  };
export default SignUp
import React from "react";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="logo">POSTAI</h1>
        <h2>Welcome back</h2>
        <p>Login to manage your account.</p>
        <button className="google-login">Sign in with Google</button>
        <div className="divider">
          <span>or</span>
        </div>
        <form>
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
          <a href="#" className="forgot-password">Forgot password?</a>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="bottom-text">
          Don't have an account yet? <a href="#">Create New Account</a>
        </p>
        <p className="help-text">
          Having trouble? <a href="#">Contact us!</a>
        </p>
      </div>
      <style>{`
        .auth-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f9f9f9;
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
          color: #007bff;
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
          background: #4285f4;
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
          background: #007bff;
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
  );
};

export default Login 
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
        
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      height: '8vh',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
    },
    navButtons: {
      display: 'flex',
      gap: '10px',
    },
    button: {
      padding: '8px 16px',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'pointer',
      border: '1px solid #007bff',
    },
    login: {
      backgroundColor: '#fff',
      color: '#007bff',
    },
    signup: {
      backgroundColor: '#007bff',
      color: '#fff',
    },
    loginHover: {
      backgroundColor: '#007bff',
      color: '#fff',
    },
    signupHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>POSTAI</div>
      <div style={styles.navButtons}>

      <Link to="/login">
          
        <button
          style={{ ...styles.button, ...styles.login }}
          onMouseEnter={(e) =>
            Object.assign(e.target.style, styles.loginHover)
          }
          onMouseLeave={(e) =>
            Object.assign(e.target.style, styles.login)
          }
        >
          Login
        </button>

        </Link>

        <Link to="/signup">


        <button
          style={{ ...styles.button, ...styles.signup }}
          onMouseEnter={(e) =>
            Object.assign(e.target.style, styles.signupHover)
          }
          onMouseLeave={(e) =>
            Object.assign(e.target.style, styles.signup)
          }
        >
          Sign Up
        </button>
        
        </Link>
        
        
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react'
import Navbar from './Navbar'

const LandingPage = () => {

    const styles = {
        container: {
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #ccc',
          borderRadius: '4px',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '400px',
        },
        input: {
          flex: 1,
          padding: '8px 12px',
          fontSize: '16px',
          border: 'none',
          outline: 'none',
        },
        button: {
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '0', // No border radius to match container shape
        },
        buttonHover: {
          backgroundColor: '#0056b3',
        },
      };

  return (
    <>
    
    <Navbar/>
    <div className="body">
        <div className="content">
            <div className="runningmsg">
                #social media
            </div>
            <div className="hero">
                Create Better Content in Less Time
            </div>
            <div className="subtext">
            GravityWrite helps you create amazing, original content that ranks #1 on search engines. Try for Free.
            </div>

            <div style={styles.container}>
      <input
        type="email"
        placeholder="Enter your email"
        style={styles.input}
      />
      <button
        style={styles.button}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = styles.button.backgroundColor)
        }
      >
        Sign Up
      </button>
    </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage
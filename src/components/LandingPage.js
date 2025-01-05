import React, { useEffect, useState, Link } from 'react';
import Navbar from './Navbar';

const LandingPage = () => {
  const words = ["#Image Generation", "#Caption Generation", "#SEO Optimization", "#Social Media Content Generation"];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const typingEffect = () => {
      const currentWord = words[wordIndex];
      setText(currentWord.slice(0, letterIndex + 1));
      setLetterIndex(prev => prev + 1);

      if (letterIndex === currentWord.length) {
        setTimeout(() => {
          setLetterIndex(0);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Pause for 2 seconds before deleting the word
      }
    };

    const interval = setInterval(typingEffect, 100); // Typing speed: 100ms per letter

    return () => clearInterval(interval);
  }, [letterIndex, wordIndex]);

  const styles = {
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to bottom right, #4b0b6a, #ffffff)',
      textShadow: '2px 2px 2px 2px black',
    },
    content: {
      textAlign: 'center',
      color: '#ffffff',
    },
    runningmsg: {
      marginBottom: '20px',
      fontSize: '14px',
      fontWeight: 'bold',
      backgroundColor: '#ffffff',
      color: '#4b0b6a',
      display: 'inline-block',
      padding: '10px 20px',
      borderRadius: '20px',
      // textShadow: '2px 2px 2px  black',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      borderRight: '3px solid',
      animation: 'blink-caret 0.75s step-end infinite',
    },
    hero: {
      fontSize: '70px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '2px 2px 2px  black',
    },
    subtext: {
      fontSize: '20px',
      marginBottom: '40px',
      textShadow: '2px 2px 2px  black',
    },
    inputContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '400px',
      height: '60px',
      margin: '0 auto',
      border: '1px solid #ccc',
      borderRadius: '10px',
      overflow: 'hidden',
      backgroundColor: '#ffffff',
      boxShadow: '1px 1px 1px  black',
    },
    emailInput: {
      flex: 1,
      padding: '8px 12px',
      fontSize: '16px',
      border: 'none',
      outline: 'none',
    },
    signUpButton: {
      padding: '8px 16px',
      fontSize: '16px',
      backgroundColor: '#7b3eff',
      color: '#ffffff',
      textShadow: '2px 2px 2px 2px black',
      border: 'none',
      height: '60px',
      cursor: 'pointer',
      borderRadius: '0', // No border radius to match container shape
    },
    signUpButtonHover: {
      backgroundColor: '#5a1bb3',
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.body}>
        <div style={styles.content}>
          <div style={styles.runningmsg}>
            {text}
          </div>
          <div style={styles.hero}>
            Create Better Content in Less Time
          </div>
          <div style={styles.subtext}>
            PostAI helps you create amazing, original content. Try for Free.
          </div>
          <div style={styles.inputContainer}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.emailInput}
            />
            
              <a href="/signup">
              
                <button
                  style={styles.signUpButton}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = styles.signUpButtonHover.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = styles.signUpButton.backgroundColor)
                  }
                >
                  Sign Up
                </button> 
              </a>

                
              
              
            
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

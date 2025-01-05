import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import your Firebase auth instance

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#CDAAED",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      height: "8vh",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      textShadow: "1px 1px 1px black",
      color: "#8F0EF8",
      textDecoration: "none",
    },
    navButtons: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "8px 16px",
      fontSize: "16px",
      borderRadius: "4px",
      cursor: "pointer",
      border: "none",
    },
    login: {
      backgroundColor: "#8709F6",
      color: "white",
    },
    signup: {
      backgroundColor: "#8709F6",
      color: "white",
    },
    logout: {
      backgroundColor: "#8709F6",
      color: "white",
    },
    buttonHover: {
      backgroundColor: "#9530ED",
      color: "#fff",
    },
  };

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Set logged-in state based on user presence
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  const handleLogout = async () => {
    await auth.signOut(); // Log out the user
    navigate("/"); // Redirect to landing page
  };

  return (
    <div style={styles.navbar}>
      <Link to="/">
        <div style={styles.logo}>POSTAI</div>
      </Link>
      <div style={styles.navButtons}>
        {isLoggedIn ? (
          <button
            style={{ ...styles.button, ...styles.logout }}
            onMouseEnter={(e) =>
              Object.assign(e.target.style, styles.buttonHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, styles.logout)
            }
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button
                style={{ ...styles.button, ...styles.login }}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, styles.buttonHover)
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
                  Object.assign(e.target.style, styles.buttonHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, styles.signup)
                }
              >
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

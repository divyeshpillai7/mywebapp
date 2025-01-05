import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import ImageGeneration from "./ImageGeneration";
import CaptionGeneration from "./CaptionGeneration";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Image Generation");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName || "User"); // Use displayName or fallback
      } else {
        navigate("/login"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, [navigate]);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Image Generation":
        return <ImageGeneration />;
      case "Caption Generation":
        return <CaptionGeneration />;
      case "Publish":
        return <div className="content">Feature under construction!</div>;
      default:
        return <div className="content">Welcome to PostAI Dashboard!</div>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="sidebar">
          <h2>DASHBOARD</h2>
          <ul>
            <li
              className={activeTab === "Image Generation" ? "active" : ""}
              onClick={() => setActiveTab("Image Generation")}
            >
              Image Generation
            </li>
            <li
              className={activeTab === "Caption Generation" ? "active" : ""}
              onClick={() => setActiveTab("Caption Generation")}
            >
              Caption Generation
            </li>
            <li
              className={activeTab === "Publish" ? "active" : ""}
              onClick={() => setActiveTab("Publish")}
            >
              Publish
            </li>
          </ul>
          {/* <button className="logout-button" onClick={handleLogout}>
            Logout
          </button> */}
        </div>
        <div className="main-content">
          <h1>Hey {userName}!</h1>
          {renderContent()}
        </div>

        <style>
          {`
            .dashboard-container {
              display: flex;
              height: 100vh;
            }

            .sidebar {
              width: 250px;
              background: linear-gradient(to bottom right, #4b0b6a, #ffffff);
              padding: 20px;
              color: white;
            }

            .sidebar h2 {
              margin-bottom: 10px;
            }

            .sidebar ul {
              list-style: none;
              padding: 0;
            }

            .sidebar ul li {
              margin-bottom: 15px;
              cursor: pointer;
              padding: 10px;
              border-radius: 5px;
              transition: background-color 0.3s;
            }

            .sidebar ul li:hover,
            .sidebar ul li.active {
              background-color: #CDAAED;
            }

            .logout-button {
              margin-top: 20px;
              padding: 10px 20px;
              border: none;
              color: black;
              font-weight: bold;
              border-radius: 5px;
              background-color: #CDAAED;
              cursor: pointer;
            }

            .main-content {
              flex: 1;
              padding: 20px;
            }

            .content {
              margin-top: 20px;
              font-size: 18px;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Dashboard;

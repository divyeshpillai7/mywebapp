import React, { useState } from 'react';
import ImageGeneration from './ImageGeneration';
import CaptionGeneration from './CaptionGeneration';

const Dashboard = ({ userName }) => {
    const [activeTab, setActiveTab] = useState('Image Generation');

    const renderContent = () => {
        switch (activeTab) {
            case 'Image Generation':
                return <ImageGeneration />;
            case 'Caption Generation':
                return <CaptionGeneration />;
            case 'Publish':
                return <div className="content">Feature under construction!</div>;
            default:
                return <div className="content">Welcome to PostAI Dashboard!</div>;
        }
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h2>PostAI</h2>
                <h3>DASHBOARD</h3>
                <ul>
                    <li
                        className={activeTab === 'Image Generation' ? 'active' : ''}
                        onClick={() => setActiveTab('Image Generation')}
                    >
                        Image Generation
                    </li>
                    <li
                        className={activeTab === 'Caption Generation' ? 'active' : ''}
                        onClick={() => setActiveTab('Caption Generation')}
                    >
                        Caption Generation
                    </li>
                    <li
                        className={activeTab === 'Publish' ? 'active' : ''}
                        onClick={() => setActiveTab('Publish')}
                    >
                        Publish
                    </li>
                </ul>
                <button className="logout-button">Logout</button>
            </div>
            <div className="main-content">
                <h1>Hey {userName || 'User'}!</h1>
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
                        background-color: #f4f4f4;
                        border-right: 1px solid #ddd;
                        padding: 20px;
                    }

                    .sidebar h2 {
                        margin-bottom: 10px;
                    }

                    .sidebar h3 {
                        margin-bottom: 20px;
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
                        background-color: #ddd;
                    }

                    .logout-button {
                        margin-top: 20px;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        background-color: #ccc;
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
    );
};

export default Dashboard;

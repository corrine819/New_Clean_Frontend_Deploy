import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Dashboard = () => {
  const { accentColor } = useTheme();

  const quadrantStyle = {
    border: `2px solid ${accentColor}`,
    borderRadius: '16px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: 'var(--background)',
    color: 'var(--text)',
    boxShadow: `0 4px 8px rgba(0,0,0,0.1)`,
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '20px',
    padding: '20px',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.03)';
    e.currentTarget.style.boxShadow = `0 8px 16px rgba(0,0,0,0.15)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = `0 4px 8px rgba(0,0,0,0.1)`;
  };

  return (
    <div style={gridStyle}>
      <div
        style={quadrantStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Workout Generator</h2>
        <Link to="/workout">Go to Workout Generator</Link>
      </div>
      <div
        style={quadrantStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Nutrition</h2>
        <p>Nutrition content coming soon.</p>
      </div>
      <div
        style={quadrantStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Progress</h2>
        <Link to="/progress">Go to Progress</Link>
      </div>
      <div
        style={quadrantStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Settings</h2>
        <Link to="/settings">Go to Settings</Link>
      </div>
      <div
        style={quadrantStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Profile</h2>
        <Link to="/profile">Go to Profile</Link>
      </div>
    </div>
  );
};

export default Dashboard;

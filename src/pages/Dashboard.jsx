
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '20px', padding: '20px' }}>
      <div style={{ border: '1px solid #ccc', padding: '20px' }}>
        <h2>Workout Generator</h2>
        <Link to="/workout">Go to Workout Generator</Link>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '20px' }}>
        <h2>Nutrition</h2>
        <p>Nutrition content coming soon.</p>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '20px' }}>
        <h2>Progress</h2>
        <Link to="/progress">Go to Progress</Link>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '20px' }}>
        <h2>Settings</h2>
        <Link to="/settings">Go to Settings</Link>
      </div>
    </div>
  );
};

export default Dashboard;

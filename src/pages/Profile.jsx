
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Profile = () => {
  const { accentColor, setAccentColor, toggleTheme } = useTheme();
  const [profilePic, setProfilePic] = useState(null);

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(URL.createObjectURL(file));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Profile</h2>
      <div>
        <label>Profile Picture: </label>
        <input type="file" accept="image/*" onChange={handlePicChange} />
        {profilePic && <img src={profilePic} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />}
      </div>
      <div>
        <label>Accent Color: </label>
        <input type="color" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} />
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Profile;

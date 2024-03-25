import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import ListIcon from '@mui/icons-material/List';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import { useTheme } from '../useContext/ThemeContext'; // Import the useTheme hook

import { Avatar } from '@mui/material';
import { auth } from '../firebase/FirebaseSetup';

const LeftSlide = () => {
  const { theme } = useTheme(); // Use the useTheme hook to access theme

  // Define background color, icon color, and border color based on the theme
  const backgroundColor = theme === 'dark' ? 'black' : 'white';
  const iconColor = theme === 'dark' ? '#888' : 'grey'; // Lighter shade of gray for better visibility
  const borderColor = theme === 'dark' ? '#555' : 'lightgray';

  // Define hover styles based on the theme
  const hoverColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';

  return (
    <div
      style={{
        backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        borderTop: 'none',
        borderRight: `2px solid ${borderColor}`,
        borderBottom: `2px solid ${borderColor}`,
        padding: "32px"
      }}
    >
      <HomeIcon style={{ color: iconColor, ':hover': { backgroundColor: hoverColor, borderRadius: '50%' } }} className="icon" />
      <PersonSearchIcon style={{ color: iconColor, ':hover': { backgroundColor: hoverColor, borderRadius: '50%' } }} className="icon" />
      <EmailIcon style={{ color: iconColor, ':hover': { backgroundColor: hoverColor, borderRadius: '50%' } }} className="icon" />
      <TelegramIcon style={{ color: iconColor, ':hover': { backgroundColor: hoverColor, borderRadius: '50%' } }} className="icon" />
      <ListIcon style={{ color: iconColor, ':hover': { backgroundColor: hoverColor, borderRadius: '50%' } }} className="icon" />
      <AllInboxIcon style={{ color: iconColor, ':hover': { backgroundColor: hoverColor, borderRadius: '50%' } }} className="icon" />
      <EqualizerIcon style={{ color: iconColor, ':hover': { backgroundColor: hoverColor, borderRadius: '50%' } }} className="icon" />
      <Avatar src={auth.currentUser?.photoURL} style={{ ':hover': { backgroundColor: hoverColor, borderRadius: '50%' } }} className="icon" />
    </div>
  );
};

export default LeftSlide;

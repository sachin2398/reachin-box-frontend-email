import React from 'react';
import DropdownIcon from './DropdownIcons';
import SwitchButton from './SwitchButton';
import './Navbar.css';
import maillogo from '../Assets/mail-logo.png';
import { useTheme } from '../useContext/ThemeContext'; // Import the useTheme hook

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Use the useTheme hook to access theme and toggleTheme

  return (
    <div className={`nav-main-email-top ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className='left-side-nav'>
        <img src={maillogo} alt="mail-logo" className='mail-logo-hm' />
        <p>Onebox</p>
      </div>
      <div className='roght-side'>
        <div onClick={toggleTheme}>
          <SwitchButton />
        </div>
        <p style={{ color: theme === 'dark' ? 'white' : 'rgba(69, 79, 91, 1)' }}>Tim's WorkSpace</p>
        <DropdownIcon style={{ color: theme === 'dark' ? 'white' : 'rgba(69, 79, 91, 1)' }} />
      </div>
    </div>
  );
};

export default Navbar;

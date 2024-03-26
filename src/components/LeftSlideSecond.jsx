import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import TelegramIcon from '@mui/icons-material/Telegram';
import { IconButton, InputBase, Paper } from '@mui/material';
import { useTheme } from '../useContext/ThemeContext'; // Import the useTheme hook

const LeftSlideSecond = () => {
  // Hardcoded email data
  const emails = [
    {
      id: 1,
      sender: 'john@gmail.com',
      subject: 'Meeting Reminder',
      message: "Could you tell me more",
      date: new Date('2024-03-25T08:00:00Z'),
      tag: 'Interested',
      read: false
    },
    {
      id: 2,
      sender: 'smith@gmail.com',
      subject: 'Project Update',
      message: 'I have tried a lot',
      date: new Date('2024-03-24T15:30:00Z'),
      tag: 'Separated',
      read: true
    },
    {
      id: 3,
      sender: 'neha@gmail.com',
      subject: 'Special Offer',
      message: 'Payment is not processing',
      date: new Date('2024-03-23T12:45:00Z'),
      tag: 'Collaborate',
      read: false
    },
    {
      id: 4,
      sender: 'smith@gmail.com',
      subject: 'Project Update',
      message: 'I have tried a lot',
      date: new Date('2024-03-22T15:30:00Z'),
      tag: 'Separated',
      read: true
    },
    {
      id: 5,
      sender: 'neha@gmail.com',
      subject: 'Special Offer',
      message: 'Payment is not processing',
      date: new Date('2024-03-21T12:45:00Z'),
      tag: 'Collaborate',
      read: false
    }
  ];

  const { theme } = useTheme(); // Get the current theme from context
  const isDarkMode = theme === 'dark'; // Check if theme is dark

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getRandomColor = (tag) => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const filteredEmails = emails.filter((email) => {
    const searchRegex = new RegExp(searchQuery, 'i'); // Case-insensitive search
    return (
      searchRegex.test(email.sender) ||
      searchRegex.test(email.subject) ||
      searchRegex.test(email.message)
    );
  });

  const refreshPanel = () => {
    // Logic to refresh the panel
    window.location.reload();
    console.log('Panel refreshed');
  };

  return (
    <div style={{ backgroundColor: isDarkMode ? '#000' : '#fff', minHeight: '100vh', color: isDarkMode ? '#fff' : '#000' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent: "space-evenly" }}>
          <h3 style={{ color: isDarkMode ? 'blue' : 'blue', font: "Open Sans", fontSize: "20px", fontWeight: "700", textAlign: "left" }}>All Inbox(s)</h3>
          <IconButton onClick={toggleDropdown} style={{ color: isDarkMode ? 'blue' : 'blue' }}>
            <ExpandMoreIcon />
          </IconButton>

          <div>
            <IconButton onClick={refreshPanel}>
   <RefreshIcon 
  style={{ 
    boxShadow: isDarkMode ? '0px 0px 5px 0px rgba(50,50,50,0.2)' : '0px 0px 5px 0px rgba(0,0,0,0.2)', 
    color: isDarkMode ? 'white' : '#000', 
    backgroundColor: isDarkMode ? 'rgba(37,38,43,1)' : 'white',
    transition: 'box-shadow 0.3s, background-color 0.3s', 
    borderRadius: '50%', 
    cursor: 'pointer', 
    '&:hover': { 
      boxShadow: isDarkMode ? '0px 0px 15px 5px rgba(0,0,0,0.5)' : '0px 0px 15px 5px rgba(0,0,0,0.5)',
      backgroundColor: isDarkMode?'lightgray':'lightgray', // Changing background color on hover
    }
  }} 
/>
            </IconButton>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: "17px" }}>
        <span style={{ fontSize: '16px', color: isDarkMode ? 'grey' : 'grey', fontFamily: "Open Sans", lineHeight: "19.07px", textAlign: "left" }}>
          <span style={{ color: isDarkMode ? "white" : "#000", fontWeight: "700" }}>{emails.length}/{emails.length}</span> Inboxes selected</span>
      </div>
      <div>
        <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: '80%', height: "28px", borderRadius: "4px", marginBottom: '16px', marginTop: "16px", marginLeft: "17px", paddingRight: "17px", boxShadow: isDarkMode ? '0px 0px 10px 0px rgba(255, 255, 255, 0.1)' : '0px 0px 10px 0px rgba(0,0,0,0.1)', border: isDarkMode?" grey":"1px solid rgba(223, 227, 232, 1)", backgroundColor: isDarkMode ? 'rgba(35, 39, 44, 1)' : '#fff' }}>
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon   style={{color: isDarkMode ? 'grey' : 'black'}} />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: isDarkMode ? 'white' : '#000' }} // Set text color based on theme
            placeholder="Search"
            inputProps={{ 'aria-label': 'search email' }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Paper>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: "3px", marginLeft: "5px", }}>
          <span style={{ fontSize: '14px', color: isDarkMode ? 'blue' : 'blue', fontWeight: "600px", paddingLeft: "12px", paddingRight: "12px", paddingTop: "6px", paddingBottom: "6px", backgroundColor: isDarkMode ? "rgba(34, 36, 38, 1)" : "rgba(236, 236, 236, 1)", borderRadius: "40%" }}>26</span>
          <p style={{ fontSize: '14px', color: isDarkMode ? 'white' : '#000', fontWeight: "bolder", font: "inter" }}>New Replies</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: "5px", justifyContent: "space-around"        }}>
          <span style={{ fontSize: '14px', color: isDarkMode ? 'white' : '#000', fontWeight: "bolder" }}>Newest</span>
          <IconButton style={{ color: isDarkMode ? 'white' : '#000' }}>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
      <div style={{ height: 'calc(100vh - 160px)', boxShadow: isDarkMode ? '0px 0px 10px 0px rgba(255, 255, 255, 0.1)' : '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
        {isDropdownOpen && filteredEmails.map((email) => (
          <div key={email.id} style={{ borderBottom:isDarkMode? "1px solid grey":"none", padding: '8px', marginLeft: '17px', marginRight: '17px', backgroundColor: isDarkMode ? '#000' : '#fff' }}>
            {/* Wrapped content with margin from left and right */}
            <div>
              <div className='box-1-t' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "blue", display: "inline-block" }}></div>
                  <h4 style={{ marginBottom: '4px', color: isDarkMode ? 'white' : '#000' }}>
                    {email.sender}
                  </h4>
                </div>
                <p style={{ fontSize: '12px', color: isDarkMode ? 'white' : 'gray' }}> {email.date.toLocaleString('en-US', { month: 'short', day: 'numeric' }).slice(0, 3)} {email.date.getDate()}</p>
              </div>
              <div className='box-1-m' style={{ display: "flex", alignItems: "center", marginLeft: '20px' }}>
                <p style={{ marginBottom: '4px', color: isDarkMode ? 'white' : '#000' }}>{email.message}</p>
              </div>
              <div className='box-1-b' style={{ display: "flex", alignItems: "centre", justifyContent: "space-around", gap: "5px", marginLeft: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5px", width: "75px", height: "18px", padding: "3px 8px 3px 8px", borderRadius: "17px", backgroundColor: isDarkMode ? "rgba(34, 36, 38, 1)" : "rgba(240, 240, 240, 1)" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: getRandomColor(email.tag), display: "inline-block" }}></div>
                  <span style={{ color: getRandomColor(email.tag), fontFamily: "Open Sans", fontSize: "10px", fontWeight: "600", lineHeight: "13.62px", textAlign: "left" }}>{email.tag}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", gap: "2px", width: "110px", height: "18px", padding: "3px 8px 3px 8px", borderRadius: "17px", backgroundColor: isDarkMode ? "rgba(34, 36, 38, 1)" : "rgba(240, 240, 240, 1)" }}>
                  <TelegramIcon style={{ color: isDarkMode ? 'white' : 'grey', width: "14px", height: "16px" }} />
                  <p style={{ color: isDarkMode ? 'white' : 'grey', width: "80px", height: "14px", fontFamily: "Open Sans", fontSize: "10px", fontWeight: "600", lineHeight: "13.62px" }}>Campaign Name</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSlideSecond;


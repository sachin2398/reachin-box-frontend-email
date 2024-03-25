import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import TelegramIcon from '@mui/icons-material/Telegram';
import { IconButton, InputBase, Paper } from '@mui/material';

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
      message: 'I have tried alot',
      date: new Date('2024-03-24T15:30:00Z'),
      tag: 'Interested',
      read: true
    },
    {
      id: 3,
      sender: 'neha@gmail.com',
      subject: 'Special Offer',
      message: 'Payment is no processing',
      date: new Date('2024-03-23T12:45:00Z'),
      tag: 'Interested',
      read: false
    }
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
    console.log('Panel refreshed');
  };

  return (
    <div >
      <div >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' , justifyContent:"space-evenly"}}>
          <h3 style={{ color: 'blue' ,font:" Open Sans",fontSize: "20px",fontWeight:" 700",textAlign: "left"}}>All Inbox(s)</h3>
          <IconButton onClick={toggleDropdown} style={{ color: 'blue' }}>
            <ExpandMoreIcon />
         </IconButton>
                  
        <div >
          <IconButton onClick={refreshPanel}>
            <RefreshIcon style={{  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)' }} />
          </IconButton>
        
         </div>
        </div>
        
               
          </div>
          <div style={{paddingLeft:"17px"}}>
              <span style={{ fontSize: '16px', color: 'gray', fontFamily: "Open Sans",lineHeight: "19.07px",textAlign: "left",
 }}><span style={{color:"black", fontWeight: "700",}}>  {emails.length}/{ emails.length}</span> Inboxes selected</span>
          </div>
          <div>
              
        <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: '80%', height:"28px",marginBottom: '16px', marginTop:"16px", marginLeft:"17px", paddingRight:"17px",marboxShadow: '0px 0px 10px 0px rgba(244,246,248,1)' }}>
             <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
                  <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Email"
            inputProps={{ 'aria-label': 'search email' }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
       
        </Paper>
          </div>
          <div style={{display:"flex",justifyContent:"space-around",gap:"20px"}}>
              
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap:"3px",  marginLeft:"5px", }}>
                  <span style={{ fontSize: '14px', color: 'blue', fontWeight: "600px",paddingLeft:"12px",paddingRight:"12px", paddingTop:"6px",paddingBottom:"6px",backgroundColor: "rgba(236, 236, 236, 1)",

                      borderRadius: "40%",
                  }}>26</span>
                  <p style={{ fontSize: '14px', color: 'black', fontWeight:"bolder",font:"inter"  }}>New Replies</p>
              </div>
              
                  <div  style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap:"10px" , }}>
                       <span style={{ fontSize: '14px', color: 'black' ,fontWeight:"bolder",}}>Newest</span>
          <IconButton style={{ color:"black" }}>
            <ExpandMoreIcon />
          </IconButton>
        </div>
         
        
    
          </div>
      <div style={{ overflowY: 'scroll', height: 'calc(100vh - 160px)', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
              {isDropdownOpen && filteredEmails.map((email) => (
           
                  <div key={email.id} style={{ borderBottom: '1px solid #ccc', padding: '8px', display: "flex", flexDirection: "column", alignItems: "centre",justifyContent:"space-evenly" }}>
           <div className='box-1-t' style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}>
                  <div style={{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:"blue", display:"inline-block"}}></div>
                    <h4 style={{ marginBottom: '4px' }}>
                       {email.sender}
                          </h4>   
                      <p style={{ fontSize: '12px', color: 'gray' }}> {email.date.toLocaleString('en-US', { month: 'long', day: 'numeric' })}</p>    
           </div>
        <div className='box-1-m' style={{display:"flex", alignItems:"center",marginLeft:"30px"}}>
                         <p style={{ marginBottom: '4px' }}>{email.message}</p>  
         </div>
                      <div className='box-1-b' style={{
                          display: "flex", alignItems: "centre", justifyContent:"space-between",gap:"5px" }} >
                          <div style={{display:"flex", alignItems:"center",justifyContent:"space-between",  width: "83px",height: "20px",padding: "3px 8px 3px 8px",gap: "8px",borderRadius: "17px",backgroundColor: "rgba(240, 240, 240, 1)",}}>
                               <div style={{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:"rgba(70, 193, 141, 1)", display:"inline-block"}}></div>
                              <span style={{ color: email.tag === 'interested' ? 'green' : 'green' }}>{email.tag}</span>
                          </div>
                          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width: "112px",height: "20px",padding: "3px 8px 3px 8px",gap: "8px",borderRadius: "17px",backgroundColor: "rgba(240, 240, 240, 1)",}}>
                            
                                   <TelegramIcon style={{color:"grey", width:"16px" ,height:"16px"}} />
                              
                                 <p style={{color:"grey",fontSize:"12px",fontWeight:"600",width:"94px"}}>Campaign Name</p> 
                          
                             
                               
                          </div>
                           
                                 
        </div>       
                      
               
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSlideSecond;

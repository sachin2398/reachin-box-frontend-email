import React from 'react'

const MidPannel = () => {
  return (
    <div>MidPannel</div>
  )
}

export default MidPannel

 // <div>
    //   <h2>Emails Batched by Date</h2>
    //   {Object.entries(batchedEmails).map(([date, emails]) => (
    //     <div key={date}>
    //       <h3>{date}</h3>
    //       <ul>
    //         {emails.map(email => (
    //           <li key={email.id}>
    //             <div>Sender: {email.sender}</div>
    //             <div>Subject: {email.subject}</div>
    //             <div>Message: {email.message}</div>
    //             <div>Timestamp: {email.timestamp}</div>
    //             <div>Read: {email.read ? 'Yes' : 'No'}</div>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   ))}
    // </div>
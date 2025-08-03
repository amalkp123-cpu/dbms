import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
    <div className='contact' id='contact'>
     <div className="s1">
     <h1>CureZone</h1>
     <div className="details">
      <p>Our vision-we strive to be a leader of health innovation that delivers the highest quality cre while providing exceptional patient 
        experiences in a modern and inviting enviornment.
      </p>
      <p>
        Address:CureZone Hospital <br />
        Thalassery,PO Thalassery <br />
        670694,Kannur,Kerala
      </p>
     </div>
     </div>
     <div className="s2">
     <div className="small">
       <div className="fb">
        <img src="src/assets/fb.png" alt="#" />
        <h3>curezone</h3>
      </div>
      <div className="call">
      <img src="src/assets/call.png" alt="#" />
        <h3>0490-123456</h3>
      </div>
      <div className="mail">
      <img src="src/assets/google.png" alt="#" />
      <h3>curezone@gmail.com</h3>
      </div>
      <div className="insta">
      <img src="src/assets/ig.png" alt="#" />
      <h3>cure_zone</h3>
      </div>
     </div>
     </div>
     
     
    </div>
    <div className="copy">
      <p>© 2025 CureZone. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Contact

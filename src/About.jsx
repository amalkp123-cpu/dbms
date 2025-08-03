import React from 'react'
import './About.css'
<<<<<<< HEAD
import video from "src/assets/video.mp4"
=======
>>>>>>> ca0f91a474958a5dfb3b1b9fcf70d02b7ba76dff


const About = () => {
  return (
    <section id='about'>
      <div className="header">
      <h1>  YOUR JOURNEY TO </h1><h1> WELLNESS BEGIN HERE</h1>
      </div>
      <div className="video">
        <video  className='play' controls autoPlay loop>
<<<<<<< HEAD
        <source src={video} type="video/mp4"></source>
=======
        <source src="src/assets/video.mp4" type="video/mp4"></source>
>>>>>>> ca0f91a474958a5dfb3b1b9fcf70d02b7ba76dff
          </video>
         
      </div>
      <div className="para">
        <h1>Welcome to Curezone hospital</h1>
        <p>
        Welcome to Curezone Hospital, a leading healthcare provider
        dedicated to serving the Thalassery community and beyond. Since our founding in 2005, we have been committed to delivering exceptional patient-centered care, combining advanced medical technology with compassionate service.
        </p>
      </div>
      <div className="founder">
        <h1>Founder</h1>
        <img src="src/assets/found.jpg" alt="" />
        <h2>Dr.John Johnson</h2>
        <p>Specialization in Cardiology</p>
      </div>
      <div className="expert">
        <h1>our experties</h1>
        <div className="experting">
       <div className="doct1">
       <img src="src/assets/doct1.jpg" alt="" />
       <h2>Dr.Smith</h2>
       <p>Specialization in Neurology</p>
       </div>
       <div className="doct2">
       <img src="src/assets/doct2.jpg" alt="" />
       <h2>Dr.Henry</h2>
       <p>Specialization in Orthopedic</p>
        </div>
        <div className="doct3">
       <img src="src/assets/doc4.jpg" alt="" />
       <h2>Dr.Madhav mahadevan</h2>
       <p>Specialization in cardioloy</p>
        </div>

        <div className="doct4">
       <img src="src/assets/doc3.jpg" alt="" />
       <h2>Dr.stella</h2>
       <p>Specialization in Pediatrics</p>
        </div>

        
        <div className="doct5">
       <img src="src/assets/doc5.jpg" alt="" />
       <h2>Dr.sophia</h2>
       <p>Specialization in Gynaecology</p>
        </div>
        
        </div>
      </div>
      
     
    </section>
  )
}

export default About

import React from 'react';

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

import logo from './logo.png'; 
import Container from 'react-bootstrap/Container';
import './Login.css';
import './about.css'; // Link to your custom CSS file

const About = () => {
  return (
    <><Navbar   variant="dark"
    
         
    style={{
       fontFamily:"Jost",
       display:"flex" , gap:"100px",
       backgroundColor: "black",
       borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
    }}>
       <Container>

       <Navbar.Brand style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}>
 <img src={logo} alt="Logo" className='LOGO' style={{ width: "60px", height: "60px" }} /> {/* Replace with your logo path */}
</Navbar.Brand> 



<Navbar.Brand style={{ fontWeight: "bold", fontSize: "40px" ,marginLeft:"-500px"}}>COMPLAINT CARE</Navbar.Brand>




<ul className="navbar-nav" style={{ display: "flex", gap: "50px" }}>
 <li className="nav-item">
    <Link to={'/'} className="nav-link" style={{ fontWeight: "bold", fontSize: "14px" }}>
       HOME
    </Link>
 </li>
<li className="nav-item">
    <Link to={'/about'} className="nav-link " style={{ fontWeight: "bold", fontSize: "14px" }}>
       ABOUT
    </Link>
 </li> 
 <li className="nav-item">
    <Link to={'/signup'} className="nav-link " style={{ fontWeight: "bold", fontSize: "14px" }}>
       SIGN UP
    </Link>
 </li>
 <li className="nav-item">
    <Link to={'/login'} className="nav-link " style={{ fontWeight: "bold", fontSize: "14px" }}>
       LOGIN
    </Link>
 </li>
</ul>
</Container>

    </Navbar>
    <div className="about-container">
      <section className="about-header">
        <h1 style={{fontWeight:"bold",fontSize:"50px",fontFamily:"Orbitron" ,color:"orangered"}}>A B O U T</h1>
        <p style={{color:"beige"}}> "  Your reliable platform for efficient complaint management  "</p>
      </section>

      <section className="about-content">
        <div className="about-description"  style={{
               backgroundColor: "rgba(0, 0, 0, 0.4)",   // Semi-transparent background
               backdropFilter: "blur(10px)",            // Blurs background for glass effect
               borderRadius: "15px",    
               color:"white"            // Rounded corners for smoothness
               // Subtle border for contrast
            }}>
          <h2 style={{fontWeight:"bold",fontSize:"50px",fontFamily:"Orbitron"}}>What is Complaint Care?</h2>
          <p>
            <strong style={{color:"orangered"}}>Complaint Care</strong> is a dedicated platform that allows users to easily submit and track their complaints. Whether it's related to public services, customer support, or other concerns, our platform ensures that complaints are registered, assigned to the right department, and resolved in a timely manner.
          </p>
        </div>

        <div className="about-features"  style={{
               backgroundColor: "rgba(0, 0, 0, 0.4)",   // Semi-transparent background
               backdropFilter: "blur(10px)",            // Blurs background for glass effect
               borderRadius: "15px",   
               color:"white"            // Rounded corners for smoothness
                // Subtle border for contrast
            }}>
          <h2 style={{fontWeight:"bold",fontSize:"50px",fontFamily:"Orbitron"}}>Key Features</h2>
          <ul>
            <li><strong style={{color:"orangered"}}>Easy Registration:</strong> Quick and easy process for filing complaints.</li>
            <li><strong style={{color:"orangered"}}>Real-Time Tracking:</strong> Track the status of your complaint from submission to resolution.</li>
            <li><strong style={{color:"orangered"}}>Automated Alerts:</strong> Get notified when your complaint is updated or resolved.</li>
            <li><strong style={{color:"orangered"}}>Admin Dashboard:</strong> Admins can manage, monitor, and resolve complaints efficiently.</li>
          </ul>
        </div>
        
        <div className="about-team"  style={{
               backgroundColor: "rgba(0, 0, 0, 0.4)",   // Semi-transparent background
               backdropFilter: "blur(10px)",            // Blurs background for glass effect
               borderRadius: "15px",     
               color:"white"               // Rounded corners for smoothness
                // Subtle border for contrast
            }}>
          <h2 style={{fontWeight:"bold",fontSize:"50px",fontFamily:"Orbitron"}}>Meet Our Team</h2>
          <p>Our team is dedicated to improving the user experience and ensuring every complaint is taken seriously. We are constantly working towards enhancing the platform to better serve our community.</p>
        </div>
      </section>

      <section className="about-footer">
        <p>Have questions? <Link to="/contact">Contact Us</Link></p>
      </section>
   
    </div>
    
    </>
  );
}

export default About;

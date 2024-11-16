import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image1 from '../../Images/image.webp'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './FooterC'
import logo from './logo.png'; 
import './Login.css';
const Home = () => {
   return (
      <>
      <div className="home-back">
         <Navbar   variant="dark"
    
         
    style={{
       fontFamily:"Jost",
       display:"flex" , gap:"100px",
       backgroundColor: "black",
       borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
    }}>
       <Container>


       <Navbar.Brand style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}>
      <img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} /> {/* Replace with your logo path */}
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
         <Container className='home-container'>
            <div className="left-side">
               <img src={Image1} alt="" />
            </div>
            <div className="right-side">
               <p>
                  <span className='f-letter'>Empower Your Team,</span><br />
                  <span className='s-letter'> Exceed Customer Expectations: Discover our</span> <br />
                  <span className='t-letter'>Complaint Management Solution</span><br />
                  <Link to={'/Login'}><Button className='reg-btn'>Register your Compliant</Button></Link>
               </p>
            </div>
         </Container>
         <Footer/>
         </div>
      </>
   )
}

export default Home

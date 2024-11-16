import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../common/FooterC'
import Complaint from '../user/Complaint';
import Status from '../user/Status';
import Container from 'react-bootstrap/Container';
import {Link, useNavigate,NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import '../common/Login.css';
import logo from './logo.png'; 

import '@fontsource/bebas-neue';
import '@fontsource/kode-mono';
import '@fontsource/orbitron';
import '@fontsource/oswald';
import '@fontsource/jost';

 
const HomePage = () => {
   const navigate = useNavigate();
   const [activeComponent, setActiveComponent] = useState('Complaint');
   const [userName, setUserName] = useState('');

   useEffect(() => {
      const getData = async () => {
         try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
               const { name } = user;
               setUserName(name);
            } else {
               navigate('/');
            }
         } catch (error) {
            console.log(error);
         }
      };

      getData();
   }, [navigate]);

   const handleNavLinkClick = (componentName) => {
      setActiveComponent(componentName);
   };

   const Logout = () => {
      localStorage.removeItem('user');
      navigate('/');
   };

   return (
      <>
      <div className="login-back">

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



<Navbar.Brand style={{ fontWeight: "bold", fontSize: "40px" ,marginLeft:"-200px"}}>COMPLAINT CARE</Navbar.Brand>




<ul className="navbar-nav" style={{ display: "flex", gap: "50px" ,marginTop:"20px"}}>
<li className="nav-item">
<Link to={'/'} className="nav-link" style={{ fontWeight: "bold", fontSize: "14px" }}>
HOME
</Link>
</li>

<li className="nav-item mb-2" >
            <NavLink 
               className={`nav-link text-light ${activeComponent === 'Complaint' ? 'active' : ''}`}
               onClick={() => handleNavLinkClick('Complaint')}
            >
               <p style={{ color:"rgb(20, 220, 47)" }}>REGISTERS</p>
            </NavLink>
         </li>
         <li className="nav-item mb-2">
            <NavLink
               className={`nav-link text-light ${activeComponent === 'Status' ? 'active' : ''}`}
               onClick={() => handleNavLinkClick('Status')}
            >
            <p style={{ color:"rgb(20, 220, 47)" }}>STATUS</p>
            </NavLink>
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
<li>
<Button onClick={Logout} variant="outline-danger">
               Log out
</Button>
</li>
</ul>
</Container>

</Navbar>

<Container className="user-h1">
               <h1>Hi <strong style={{color:"crimson"}}>{userName}</strong></h1>
            </Container>
<br />
<div className="user-h2">
               <p style={{fontFamily:"Orbitron"}}>R E G I S T E R  &nbsp; &nbsp;H E R E</p>
            </div>


         {/* <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
               <h1 className="navbar-brand text-light">Hi, {userName}</h1>
               <div className="mt-2 navbar-collapse text-light" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-lg-0">
                     <li className="nav-item mb-2">
                        <NavLink
                           className={`nav-link text-light ${activeComponent === 'Complaint' ? 'active' : ''}`}
                           onClick={() => handleNavLinkClick('Complaint')}
                        >
                           Complaint Register
                        </NavLink>
                     </li>
                     <li className="nav-item mb-2">
                        <NavLink
                           className={`nav-link text-light ${activeComponent === 'Status' ? 'active' : ''}`}
                           onClick={() => handleNavLinkClick('Status')}
                        >
                           Status
                        </NavLink>
                     </li>
                  </ul>
               </div>
               <button className="btn btn-danger" onClick={Logout}>
                  LogOut
               </button>
            </div>
         </nav> */}
         <div className="home-body" style={{minHeight:"70vh"}}>

            <div className="container" style={{marginLeft:"100px"}}>
               {activeComponent === 'Complaint' ? <Complaint /> : null}
               {activeComponent === 'Status' ? <Status /> : null}
            </div>
         </div>
         <Footer />
         </div>
      </>
   );
};

export default HomePage;






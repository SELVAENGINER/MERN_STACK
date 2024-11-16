import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



import {Link, useNavigate,NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import '../common/Login.css';
import logo from './logo.png'; 
import FooterC from '../common/FooterC';
import '@fontsource/bebas-neue';
import '@fontsource/kode-mono';
import '@fontsource/orbitron';
import '@fontsource/oswald';
import '@fontsource/jost';


import UserInfo from './UserInfo';
import AccordionAdmin from "./AccordionAdmin";
import AgentInfo from './AgentInfo';

const AdminHome = () => {
   const navigate = useNavigate();
   const [activeComponent, setActiveComponent] = useState('dashboard');

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
         {/* <Navbar className="text-white" bg="dark" expand="lg">
            <Container fluid>
               <Navbar.Brand className="text-white" href="#">
                  Hi Admin {userName}
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav className="text-white me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                     <NavLink
                        className={`nav-link text-light ${activeComponent === 'dashboard' ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick('dashboard')}
                     >
                        Dashboard
                     </NavLink>
                     <NavLink
                        className={`nav-link text-light ${activeComponent === 'UserInfo' ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick('UserInfo')}
                     >
                        User
                     </NavLink>
                     <NavLink
                        className={`nav-link text-light ${activeComponent === 'Agent' ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick('Agent')}
                     >
                        Agent
                     </NavLink>
                  </Nav>
                  <Button onClick={LogOut} variant="outline-danger">
                     Log out
                  </Button>
               </Navbar.Collapse>
            </Container>
         </Navbar> */}


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
<img src={logo} alt="Logo" className='LOGO' /> {/* Replace with your logo path */}
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
               onClick={() => handleNavLinkClick('UserInfo')}
            >
               <p style={{ color:"rgb(20, 220, 47)" }}>USERS</p>
            </NavLink>
         </li>
         <li className="nav-item mb-2">
            <NavLink
               className={`nav-link text-light ${activeComponent === 'Status' ? 'active' : ''}`}
               onClick={() => handleNavLinkClick('Agent')}
            >
            <p style={{ color:"rgb(20, 220, 47)" }}>AGENTS</p>
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
               <h1 style={{marginTop:"30px"}}>Hi Admin &nbsp;<strong style={{color:"crimson"}}>{userName}</strong></h1>
            </Container>
<br />


         <div className="content">
            {activeComponent === 'Agent' ? <AgentInfo /> : null}
            {activeComponent === 'dashboard' ? <AccordionAdmin /> : null}
            {activeComponent === 'UserInfo' ? <UserInfo /> : null}
         </div>
         <FooterC />
         </div>
      </>
   )


};

export default AdminHome;



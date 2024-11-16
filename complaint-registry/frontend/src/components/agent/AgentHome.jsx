import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import '@fontsource/orbitron';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Collapse from 'react-bootstrap/Collapse';
import ChatWindow from '../common/ChatWindow';
import Footer from '../common/FooterC'
import {Link, useNavigate } from 'react-router-dom';
import logo from './logo.png'; 
import '../common/Login.css';

const AgentHome = () => {
   const style = {
      marginTop: '66px',
   }

   const navigate = useNavigate();
   const [userName, setUserName] = useState('');
   const [toggle, setToggle] = useState({})
   const [agentComplaintList, setAgentComplaintList] = useState([]);

   useEffect(() => {
      const getData = async () => {
         try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
               const { _id, name } = user;
               setUserName(name);
               const response = await axios.get(`http://localhost:8000/allcomplaints/${_id}`);
               const complaints = response.data;
               setAgentComplaintList(complaints);
            } else {
               navigate('/');
            }
         } catch (error) {
            console.log(error);
         }
      };

      getData();
   }, [navigate]);

   const handleStatusChange = async (complaintId) => {
      try {
         await axios.put(`http://localhost:8000/complaint/${complaintId}`, { status: 'completed' });
         setAgentComplaintList((prevComplaints) =>
            prevComplaints.map((complaint) =>
               complaint._doc.complaintId === complaintId ? { ...complaint, _doc: { ...complaint._doc, status: 'completed' } } : complaint
            )
         );
      } catch (error) {
         console.log(error);
      }
   };

   const handleToggle = (complaintId) => {
      setToggle((prevState) => ({
         ...prevState,
         [complaintId]: !prevState[complaintId],
      }));
   };

   const LogOut = () => {
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
 <img src={logo} alt="Logo" className='LOGO'/> {/* Replace with your logo path */}
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
 <li>
 <Button onClick={LogOut} variant="outline-danger">
                        Log out
 </Button>
 </li>
</ul>
</Container>

    </Navbar>



            {/* <Navbar className="text-white" bg="dark" expand="lg">
               <Container fluid>
                  <Navbar.Brand className="text-white">
                     Hi Agent {userName}
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                     <Nav className="text-white me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavLink style={{ textDecoration: 'none' }} className="text-white">
                           View Complaints
                        </NavLink>
                     </Nav>
                     <Button onClick={LogOut} variant="outline-danger">
                        Log out
                     </Button>
                  </Navbar.Collapse>
               </Container>
            </Navbar> */}
 <Container className="agent-h1">
               <h1>Hi Agent <strong style={{color:"crimson"}}>{userName}</strong></h1>
            </Container>
<br />
<div className="agent-h2">
               <p style={{fontFamily:"Orbitron"}}>COMPLAINTS</p>
            </div>

            <div className="centering" style={{marginLeft:"250px" , marginRight:"250px"}}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', margin: '20px' }}>
               {agentComplaintList && agentComplaintList.length > 0 ? (
                  agentComplaintList.map((complaint, index) => {
                     const open = toggle[complaint._doc.complaintId] || false;
                     return (
                        <Card key={index} style={{ width: '18rem', margin: '15px',backgroundColor: "rgba(255, 55, 0, 0.173)",   // Semi-transparent background
                           backdropFilter: "blur(10px)",            // Blurs background for glass effect
                           borderRadius: "15px",                    // Rounded corners for smoothness
                           border: "1px solid rgba(255, 255, 255, 0.2)",color:"white" }}>
                           <Card.Body>
                              <Card.Text><b>Name:</b> {complaint.name}</Card.Text>
                              <Card.Text><b>Address:</b> {complaint.address}</Card.Text>
                              <Card.Text><b>City:</b> {complaint.city}</Card.Text>
                              <Card.Text><b>State:</b> {complaint.state}</Card.Text>
                              <Card.Text><b>Pincode:</b> {complaint.pincode}</Card.Text>
                              <Card.Text><b>Comment:</b> {complaint.comment}</Card.Text>
                              <Card.Text><b>Status:</b> {complaint._doc.status}</Card.Text>

                              {complaint.status !== 'completed' && (
                                 <Button onClick={() => handleStatusChange(complaint._doc.complaintId)} className='agent-btn'>
                                    STATUS CHANGE
                                 </Button>
                              )}
                              <Button onClick={() => handleToggle(complaint._doc.complaintId)}
                                 aria-controls={`collapse-${complaint._doc.complaintId}`}
                                 aria-expanded={!open} className='agent-btn' style={{marginLeft:"10px"}} >
                                 MESSAGE
                              </Button>
                              <div >
                                 <Collapse in={!open} dimension="width">
                                    <div id="example-collapse-text">
                                       <Card body style={{ width: '250px', marginTop: '12px' ,backgroundColor:"black"}}>
                                          <ChatWindow key={complaint._doc.complaintId} complaintId={complaint._doc.complaintId} name={userName} />
                                       </Card>
                                    </div>
                                 </Collapse>
                              </div>

                           </Card.Body>
                        </Card>
                        
                     );
                  })
               ) : (
                  <Alert variant="info">
                     <Alert.Heading>No complaints to show</Alert.Heading>
                  </Alert>
               )}
            </div>
            </div>
            <Footer style={style}/>
         </div>
        
      </>
   );
};

export default AgentHome;




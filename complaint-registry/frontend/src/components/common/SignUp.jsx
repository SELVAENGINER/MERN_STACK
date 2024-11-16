import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './FooterC'
import logo from './logo.png'; 
import './Login.css';
const SignUp = () => {
   const [title, setTitle] = useState("Select User")
   const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      phone: "",
      userType: ""
   })
   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
   }

   const handleTitle = (select) => {
      setTitle(select)
      setUser({ ...user, userType: select });
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      const updatedUser = { ...user, userType: title };
      axios.post("http://localhost:8000/SignUp", updatedUser)
         .then((res) => {
            alert("record submitted")
            JSON.stringify(res.data.user)
         })
         .catch((err) => {
            console.log(err)
         })
      setUser({
         name: "",
         email: "",
         password: "",
         phone: "",
         userType: ""
      })
   }
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
         <section className="gradient-custom">
            <div className="container">
               <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                     <div className="card" style={{
               backgroundColor: "rgba(0, 0, 0, 0.4)",   // Semi-transparent background
               backdropFilter: "blur(10px)",            // Blurs background for glass effect
               borderRadius: "15px",    
               color:"white",                // Rounded corners for smoothness
               border: "1px solid rgba(255, 255, 255, 0.2)" // Subtle border for contrast
            }}>
                        <div className="card-body p-5 text-center">
                           <div className="mb-md-5 mt-md-4 pb-5">
                              <h2 className="fw-bold mb-4 ">SignUp For Registering the Complaint</h2>
                              <p className="text-white-50 mb-4">Please enter your Details</p>
                              <form onSubmit={handleSubmit}>
                                 <div className="form-outline form-white mb-4">
                                    <input type="name" name="name" value={user.name} onChange={handleChange} className="form-control form-control-lg" required />
                                    <label className="form-label" htmlFor="name">Full Name</label>
                                 </div>
                                 <div className="form-outline form-white mb-2">
                                    <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control form-control-lg" required />
                                    <label className="form-label" htmlFor="email">Email</label>
                                 </div>
                                 <div className="form-outline form-white mb-2">
                                    <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control form-control-lg" required />
                                    <label className="form-label" htmlFor="password">Password</label>
                                 </div>
                                 <div className="form-outline form-white mb-2">
                                    <input type="phone" name="phone" value={user.phone} onChange={handleChange} className="form-control form-control-lg" required />
                                    <label className="form-label" htmlFor="mobile">Mobile No.</label>
                                 </div>
                                 <br />
                                 <div>
                                    <Dropdown>
                                       <Dropdown.Toggle className="dropdwn">
                                       
                                          {title}
                                       </Dropdown.Toggle>

                                       <Dropdown.Menu>
                                          <Dropdown.Item onClick={() => handleTitle("Ordinary")}>Ordinary</Dropdown.Item>
                                          <Dropdown.Item onClick={() => handleTitle("Admin")}>Admin</Dropdown.Item>
                                          <Dropdown.Item onClick={() => handleTitle("Agent")}>Agent</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                   
                                  
                                 </div>
                                 <button className="login-btn" type="submit">Register</button>
                              </form>
                           </div>
                           <div>
                              <p className="mb-0">Had an account?<Link to={"/Login"}>Login</Link></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer/>
         </div>
      </>
   )
}

export default SignUp

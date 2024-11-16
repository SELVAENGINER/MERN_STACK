import axios from 'axios';
import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './FooterC'
import logo from './logo.png'; 
import './Login.css';
import '@fontsource/bebas-neue';
import '@fontsource/kode-mono';
import '@fontsource/orbitron';
import '@fontsource/oswald';
import '@fontsource/jost';

const Login = () => {
   const navigate = useNavigate();
   const [user, setUser] = useState({
      email: "",
      password: ""
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8000/Login", user)
         .then((res) => {
            alert("Successfully logged in");
            localStorage.setItem("user", JSON.stringify(res.data));
            const isLoggedIn = JSON.parse(localStorage.getItem("user"));
            const { userType } = isLoggedIn
            switch (userType) {
               case "Admin":
                  navigate("/AdminHome")
                  break;
               case "Ordinary":
                  navigate("/HomePage")
                  break;
               case "Agent":
                  navigate("/AgentHome")
                  break;

               default:
                  navigate("/Login")
                  break;
            }
         })
         .catch((err) => {
            if (err.response && err.response.status === 401) {
               alert("User doesn`t exists");
            }
            navigate("/Login");
         });
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
         <section className="vh-100 gradient-custom">
   <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
         <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card text-white p-4" style={{
               backgroundColor: "rgba(0, 0, 0, 0.4)",   // Semi-transparent background
               backdropFilter: "blur(10px)",            // Blurs background for glass effect
               borderRadius: "15px",                    // Rounded corners for smoothness
               border: "1px solid rgba(255, 255, 255, 0.2)" // Subtle border for contrast
            }}>
               <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                     <h2 className="fw-bold mb-4">LOGIN</h2>
                     <p className="text-white-50 mb-5">Please enter your Credentials!</p>
                     <form onSubmit={handleSubmit}>
                        <div className="form-outline form-white mb-4">
                           <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control form-control-lg" required />
                           <label className="form-label" htmlFor="email">Email</label>
                        </div>
                        <div className="form-outline form-white mb-4">
                           <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control form-control-lg" autoComplete="off" required />
                           <label className="form-label" htmlFor="password">Password</label>
                        </div>

                        <button className=" login-btn " type="submit">Login</button>
                     </form>
                  </div>
                  <div>
                     <p className="mb-0">Don't have an account? <Link to="/SignUp" >SignUp</Link></p>
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
   );
};

export default Login;

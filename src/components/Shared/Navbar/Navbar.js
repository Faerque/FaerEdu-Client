import React, { useContext } from 'react';
import './Navbar.css';
import {Carousel} from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import img1 from '../../../images/img_1.jpg';
import img3 from '../../../images/img_3.jpg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div >
             <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary nav-border p-md-3">
               <div className="container">
                   <a href="" className="navbar-brand text-white"> FaerEdu+</a>
                    <button className="dark"
                         type="button"
                         className="navbar-toggler"
                         data-bs-target="#navbarNav"
                         data-bs-toggle="collapse"
                         aria-controls="navbarNav"
                         aria-expanded="false"
                         aria-label="Toggle Navbar"
                     >
                         <span className="navbar-toggler-icon"></span>
                     </button>

                     <div className="collapse navbar-collapse" id="navbarNav">
                         <div className="mx-auto">

                         </div>
                         <ul className="navbar-nav">
                             <li className="nav-item">
                                 <Link to='/' className="nav-link text-white"> Home </Link>
                                 </li>
                             <li className="nav-item">
                                 <Link to="/course" className="nav-link text-white"> Courses </Link>
                                 </li>
                             <li className="nav-item">
                                 <Link to="/" className="nav-link text-white"> Blog </Link>
                                 </li>
                             <li className="nav-item">
                                 <Link to="/contactUs" className="nav-link text-white"> Contact us </Link>
                                 </li>
                             <li className="nav-item">
                                {loggedInUser.email ? (
                                    <Link to="/loginUserInfo" className="nav-link text-white"> {loggedInUser.name} </Link>
                                ): ( <Link to="/login" className="nav-link text-white">
                                  Sign In                               
                              </Link>) }
                                 </li>
                             <li className="nav-item">
                                {loggedInUser.email ? (
                                    <Link to="/adminDashboard" className="nav-link text-white"> Dashboard </Link>
                                ) : <p>  </p>}
                                 </li>
                             
                                 
                         </ul>
                     </div>
                 </div>
             </nav>
       
             <Carousel controls={true} fade pause={'hover'}  >
   <Carousel.Item interval={5000}>
     <Zoom>
     <img
       className="d-block w-100"
       src={img1}
       alt="First slide"
     />
     </Zoom>
    <Fade bottom >
    <Carousel.Caption>
      <div className="header-text">
      <h1>Welcome to FaerEdu+</h1>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       <button className="btn btn-primary">GET THIS NOW</button>
      </div>
     </Carousel.Caption>
    </Fade>
   </Carousel.Item>

   <Carousel.Item>
       <Zoom>
     <img
       className="d-block w-100"
       src={img3}
       alt="Third slide"
       />
       </Zoom>
       <Fade bottom >
    <Carousel.Caption>
      <div className="header-text">
      <h1>Welcome to FaerEdu+</h1>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       <button className="btn btn-primary">GET THIS NOW</button>
      </div>
     </Carousel.Caption>
    </Fade>
   </Carousel.Item>
 </Carousel>

 </div>
    );
};

export default Navbar;
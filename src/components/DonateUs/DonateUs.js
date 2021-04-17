import React from "react";
import { Link } from "react-router-dom";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import './DonateUs.css';
import Fade from 'react-reveal/Fade';

const DonateUs = () => {
  return (
    <main className="donate-background">
        <div className="container">
      <div className="row align-items-center" style={{ height: "80vh" }}>
        <div className="col-md-5 mx-auto">
            <Fade bottom>
          <div className="card shadow-lg card-style" style={{ padding: "30px", border: 'none' }}>
            <h1><span className="text-primary"> FaerEdu+</span> <br/></h1> 
            <h6> is a open source learning platform yet. Here we have 10+ teacher for every course and maintainer. So it will be a big hope for us if we got donate from good people like you :D </h6>
            <br/>
            <div className="btn btn-outline-danger col-5">
               <Link to='/'> Not now! Back to home </Link>
            </div>
          </div>
          </Fade>
        </div>
        <div className="col-md-5 mx-auto">
            <Fade bottom>
          <div className="card shadow-lg card-style" style={{ padding: "30px", border: 'none' }}>
            <ProcessPayment> </ProcessPayment>
          </div>
          </Fade>
        </div>
      </div>
        </div>
    </main>
  );
};

export default DonateUs;

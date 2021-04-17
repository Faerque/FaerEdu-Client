import React from "react";
import "./Contact.css";
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <section className="pt-5 pb-5 mb-5 contact-bg">
      <div className="mx-4">
        <h4> Connect with us </h4>
        <p> Feel free to connect with us</p>
      </div>
      <div className="contact-box d-flex">
        <div className="contact-left mx-4 col-md-6 ">
          <h4> What's your thought?  </h4>
          <br />
          <form action="">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="Name">Name</label>
                <input type="text" placeholder="Ema Waston"></input>
              </div>
              <br />
              <div className="input-group">
                <label htmlFor="Phone">Phone</label>
                <input type="text" placeholder="+880 321 4567 9898"></input>
              </div>
              <br />
              <div className="input-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  placeholder="Emawaston@yahoomail.com"
                ></input>
              </div>
              <br />
              <div className="input-group">
                <label htmlFor="Address">Address</label>
                <input type="text" placeholder=""></input>
              </div>
            </div>
            <label htmlFor="Message">Message</label>
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn-outline-primary shadow-lg ">
              SEND
            </button>
          </form>
        </div>
        <div className="contact-right d-md-block text-white col-md-5 bg-primary">
          <h3> Reach us </h3>
          <table>
            <tr>
              <td> <h4> Email: </h4> </td>
              <td>FaerEdu@contact.com</td>
            </tr>
            <tr>
              <td> <h4> Phone: </h4> </td>
              <td>+880 999 5555 3224</td>
            </tr>
            <tr>
              <td><h4> Address: </h4></td>
              <td>
                Chattgram, Bangladesh Agrabad, Housing State, 4234
              </td>
            </tr>
          </table>
        </div>
      </div>
      <br/>
      <Link to='/home'> <button className="mx-3 btn btn-outline-danger"> Back to top </button> </Link>
    </section>
  );
};

export default Contact;

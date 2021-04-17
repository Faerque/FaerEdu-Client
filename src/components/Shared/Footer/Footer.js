import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Footer.css";

const Footer = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="main-footer text-white bg-primary ">
      <div className="container ">
        <div className="row">
          <div className="col">
            <h4> FaerEdu+ </h4>
            <ul className="list-unstyled">
              <li> 342-653-9942 </li>
              <li> Chattgram, Bangladesh </li>
              <li> Agrabad, Housing State, 4234 </li>
            </ul>
          </div>
          <div className="col">
            <h4> Things you need to do </h4>
            <ul className="list-unstyled">
              <li> Complete your course </li>
              <Link to="/donateUs">
                {" "}
                <li style={{ color: "white" }}> Donate us </li>{" "}
              </Link>
              <li> Other STUFF </li>
            </ul>
          </div>
          <div className="col">
            <h4> User Terms </h4>
            <ul className="list-unstyled">
              <li> {loggedInUser.name} </li>
              <br />
              {loggedInUser.email ? (
                <button
                  className="btn btn-outline-danger text-dark ml-1"
                  onClick={() => setLoggedInUser({})}
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-outline-success text-dark ml-1">
                    Sign In
                  </button>
                </Link>
              )}
              <li className="nav-item">
                {loggedInUser.email ? (
                  <Link to="/adminDashboard" className="nav-link text-white">
                    {" "}
                    Admin Dashboard{" "}
                  </Link>
                ) : (
                  <p> </p>
                )}
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} FAEREDU+ Ltd | ALl rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

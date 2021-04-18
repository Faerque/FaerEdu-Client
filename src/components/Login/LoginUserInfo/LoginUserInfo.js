import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import Fade from "react-reveal/Fade";

const LoginUserInfo = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
      <Fade>
          <section>
        <nav class="navbar navbar bg-light">
          <Link className="navbar-brand  mx-5 " to="/">
            <h2>
              {" "}
              <span className="text-primary">FaerEdu+</span>
            </h2>
          </Link>
        </nav>
        <div className="col-md-6 mx-auto mt-5">
          <div className="border">
            <div className="p-5">
              <h3> Logged in user Name: {loggedInUser.name} </h3>
              <h3> Logged in user Email: {loggedInUser.email} </h3>
            </div>
            <div className=" mx-5 mb-5">
                <Link  style={{ textDecoration: "none" }} to='/enrolledCourse'> <button className="btn btn-outline-success"> Go to Your Dashboard </button> </Link>
              <br/>
              <br/>
              <button

                className="btn btn-outline-danger"
                onClick={() => setLoggedInUser({})}
              >
                {" "}
                Sign Out
              </button>
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                <button className="btn btn-outline-dark">
                  {" "}
                  Back to Home{" "}
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
    </section>
      </Fade>
  );
};

export default LoginUserInfo;

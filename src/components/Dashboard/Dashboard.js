import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <main className="container">
      <nav class="navbar navbar bg-light">
        <Link className="navbar-brand  mx-5 " to="/">
          <h2>
            {" "}
            <span className="text-primary">FaerEdu+</span>
          </h2>
        </Link>
      </nav>
      <div className="row">
        <div className="m-5  col-md-2">
          <Sidebar> </Sidebar>
        </div>
        <div className="shadow mb-3 col-md-8 m-5">
          <h1> Click on Course List to check your courses </h1>
          <br />
          <h1> To give us a review click on review </h1>
          <Link to="/">
            {" "}
            <button className="shadow btn btn-outline-primary">
              {" "}
              Back to Home{" "}
            </button>{" "}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

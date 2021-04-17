import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faList,
  faUserPlus,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const AdminSidebar = () => {
  return (
    <section>
      <div className="row shadow p-1">
        <Link style={{ textDecoration: "none" }} to="/adminDashboard">
          {" "}
          <p>
            {" "}
            <FontAwesomeIcon icon={faList} /> <span> Order List</span>{" "}
          </p>{" "}
        </Link>
        <Link style={{ textDecoration: "none" }} to="/addCourse">
          {" "}
          <p>
            {" "}
            <FontAwesomeIcon icon={faPlus} /> <span> Add Course</span>{" "}
          </p>{" "}
        </Link>
        <Link style={{ textDecoration: "none" }} to="/manageCourse">
          {" "}
          <p>
            {" "}
            <FontAwesomeIcon icon={faTasks} /> <span> Manage Courses</span>{" "}
          </p>{" "}
        </Link>
      </div>
    </section>
  );
};

export default AdminSidebar;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faList,
  faTasks,
  faCommentDots,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const AdminSidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch('https://lit-hamlet-54538.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data =>setIsAdmin(data))
},[])


  return (
    <section className="container">
      <div className="row shadow p-1">
      { isAdmin && 
        <div>
        <Link style={{ textDecoration: "none" }} to="/orderList">
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
          <Link style={{ textDecoration: "none" }} to="/makeAdmin">
            {" "}
            <p>
              {" "}
              <FontAwesomeIcon icon={faUserPlus}/> <span> Make Admin</span>{" "}
            </p>{" "}
          </Link>
        </div>
      }
        <Link style={{ textDecoration: "none" }} to="/enrolledCourse">
          {" "}
          <p>
            {" "}
            <FontAwesomeIcon icon={faList} /> <span> Course List</span>{" "}
          </p>{" "}
        </Link>
        <Link style={{ textDecoration: "none" }} to="/userReview">
          {" "}
          <p>
            {" "}
            <FontAwesomeIcon icon={faCommentDots} /> <span> Review</span>{" "}
          </p>{" "}
        </Link>
      </div>
    </section>
  );
};

export default AdminSidebar;

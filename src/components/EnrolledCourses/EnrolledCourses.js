import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import AdminSidebar from "../Admin/AdminSidebar/AdminSidebar";

const EnrolledCourses = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [enrolledCourse, setEnrolledCourse] = useState([]);
  const [delCourse, setDelCourse] = useState([]);

  useEffect(() => {
    fetch(
      "https://lit-hamlet-54538.herokuapp.com/enrolledCourse/?email=" +
        loggedInUser.email,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEnrolledCourse(data);
      });
  }, [enrolledCourse]);

  const deleteEnrollCourse = (id) => {
    fetch(`https://lit-hamlet-54538.herokuapp.com/deleteEnrolledCourse/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setDelCourse(data));
  };

  return (
    <section className="container" >
     <div className="row">
     <nav class="navbar navbar bg-light">
          <Link className="navbar-brand  mx-5 " to="/">
            <h2>
              {" "}
              <span className="text-primary">FaerEdu+</span>
            </h2>
          </Link>
        </nav>
       <div className="col-md-3 mt-5">
         <AdminSidebar>  </AdminSidebar>
       </div>
     <table className="mt-5">
        <table className="table table-hover table-responsive ">
          <caption>Total Enrolled Course {enrolledCourse.length}</caption>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col" className="text-center">
                {" "}
                Name
              </th>
              <th scope="col" className="text-center">
                Phone
              </th>
              <th scope="col" className="text-center">
                Email
              </th>
              <th scope="col" className="text-center">
                Course Name
              </th>
              <th scope="col" className="text-center">
                Status
              </th>
              <th scope="col" className="text-center">
                Manage Course
              </th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourse.map((enrolledCourse, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{enrolledCourse.name}</td>
                <td>{enrolledCourse.phone}</td>
                <td>{enrolledCourse.email}</td>
                <td>{enrolledCourse.courseName}</td>
                <td>{enrolledCourse.status}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => deleteEnrollCourse(enrolledCourse._id)}
                    className="btn btn-danger"
                  >
                    {" "}
                    Dismiss Course{" "}
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </table>
     </div>
    </section>
  );
};

export default EnrolledCourses;

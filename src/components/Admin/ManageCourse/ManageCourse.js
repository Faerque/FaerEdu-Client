import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const ManageCourse = () => {
  const [courses, setCourses] = useState([]);

  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://lit-hamlet-54538.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, [courses]);

  const deleteCourse = (id) => {
    fetch(`https://lit-hamlet-54538.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setCourse(data));
  };

  return (
    <div className="container">
      <nav class="navbar navbar bg-light">
        <Link className="navbar-brand  mx-5 " to="/">
          <h2>
            {" "}
            <span className="text-primary">FaerEdu+</span>
          </h2>
        </Link>
      </nav>
      <div className="row">
        <div className="col-md-2 mt-5 mx-5">
          <AdminSidebar> </AdminSidebar>
        </div>
        <div className="col-md-8 card p-2 shadow  mt-5 mx-5">
          <table class="table table-hover">
            <Fade>
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    No
                  </th>
                  <th scope="col" className="text-center">
                    Course Name
                  </th>
                  <th scope="col" className="text-center">
                    Manage Course
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr>
                    <th scope="row" className="text-center">
                      {index + 1}
                    </th>
                    <td className="text-center">{course.name}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteCourse(course._id)}
                      >
                        Delete Course
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Fade>
          </table>

          <Link to="/adminDashboard">
            {" "}
            <button className="btn btn-outline-primary">
              {" "}
              Back to Dashboard{" "}
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageCourse;

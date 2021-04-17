import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { UserContext } from "../../../App";

const CourseByUser = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [courseByUser, setCourseByUser] = useState([]);

  useEffect(() => {
    fetch("https://lit-hamlet-54538.herokuapp.com/courseEnrolledByUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourseByUser(data);
      });
  }, []);

  return (
    <section className="container">
      <Fade>
        <div className="row">
          <table style={{ padding: "10px" }} class="table shadow ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Student Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Course Name</th>
                <th scope="col">Status</th>
                <th scope="col">Enrolled Date</th>
              </tr>
            </thead>
            <tbody>
              {courseByUser.map((courseList, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{courseList.userName}</td>
                  <td>{courseList.name}</td>
                  <td>{courseList.email}</td>
                  <td>{courseList.phone}</td>
                  <td>{courseList.courseName}</td>
                  <td>{courseList.courseStatus}</td>
                  <td>{courseList.enrolledCourse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fade>
    </section>
  );
};

export default CourseByUser;

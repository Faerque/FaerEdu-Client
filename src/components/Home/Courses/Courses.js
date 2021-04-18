import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import CourseDetail from "../CourseDetail/CourseDetail";
import { Link } from "react-router-dom";

const Courses = ({ date }) => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://lit-hamlet-54538.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourseData(data);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <div className="services-container mt-5 mb-5">
        <Fade cascade>
          <div className="text-center">
            <h1>
              {" "}
              Available course on{" "}
              <span className="text-primary">{date.toDateString()}</span>{" "}
            </h1>
          </div>

          <div className="d-flex justify-content-center">
            <div className="w-75 row pt-4">
              {loading ? (
                <div
                  className="spinner-border" style={{ marginLeft: "48%", width: "3rem", height: "3rem" }}
                  role="status">
                </div>
              ) : (
              courseData.map((course) => (
                <CourseDetail key={course._id} date={date} course={course}>
                  {" "}
                </CourseDetail>
              )))}
            </div>
          </div>
        </Fade>
      </div>
      <Link to="/home">
        {" "}
        <button className="mx-5 btn btn-outline-danger">
          {" "}
          Back to Home{" "}
        </button>{" "}
      </Link>
      <br />
      <br />
    </section>
  );
};

export default Courses;

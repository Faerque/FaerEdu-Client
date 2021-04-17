import React, { useContext, useEffect, useState } from "react";
// import htmlCssJs from "../../../images/Full course html js css.png";
// import DigitalMarketing from "../../../images/Digital Marketing.png";
// import WordPress from "../../../images/WordPress.png";
// import SQL from "../../../images/SQL.png";
// import photography from "../../../images/photography.png";
// import videography from "../../../images/videographer.png";
// import serverEngineer from "../../../images/server engineer.png";
import Fade from "react-reveal/Fade";
import CourseDetail from "../CourseDetail/CourseDetail";
import { Link } from "react-router-dom";

import { UserContext } from "../../../App";

// const CourseData = [
//   {
//     id: 1,
//     name: "Masters in HTML JS AND CSS",
//     detail:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nulla!",
//     img: htmlCssJs,
//     status: "Life Time access",
//     price: 6000,
//   },
//   {
//     id: 2,
//     name: "Digital Marketing",
//     detail:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nulla!",
//     img: DigitalMarketing,
//     status: "Life Time access",
//     price: 9000,
//   },
//   {
//     id: 3,
//     name: "Intermediate WordPress",
//     detail:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nulla!",
//     img: WordPress,
//     status: "Life Time access",
//     price: 3000,
//   },
//   {
//     id: 4,
//     name: "SQL Basic",
//     detail:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nulla!",
//     img: SQL,
//     status: "Life Time access",
//     price: 4000,
//   },
//   {
//     id: 5,
//     name: "Professional Photography",
//     detail:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nulla!",
//     img: photography,
//     status: "Life Time access",
//     price: 6500,
//   },
//   {
//     id: 6,
//     name: "Professional Videography",
//     detail:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nulla!",
//     img: videography,
//     status: "Life Time access",
//     price: 8000,
//   },
//   {
//     id: 7,
//     name: "Professional Photography",
//     detail:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nulla!",
//     img: photography,
//     status: "Life Time access",
//     price: 6500,
//   },
//   {
//     id: 8,
//     name: "Server Engineer",
//     detail:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nulla!",
//     img: serverEngineer,
//     status: "Life Time access",
//     price: 11000,
//   },
// ];

const Courses = ({ date }) => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    fetch("https://lit-hamlet-54538.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourseData(data);
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
              {courseData.map((course) => (
                <CourseDetail key={course._id} date={date} course={course}>
                  {" "}
                </CourseDetail>
              ))}
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

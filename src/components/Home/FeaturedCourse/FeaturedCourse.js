import featured from "../../../images/CourseHome.jpg";
import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const FeaturedService = () => {
  return (
    <section className="">
      <div className="container mb-5">
        <Fade>
          <div className="row mt-5">
            <div className="col-md-6 m-md-0">
              <img src={featured} alt="" className="mt-5 mb-5 img-fluid" />
            </div>
            <div className="col-md-6 mt-5 align-self-center">
              <h1 style={{ color: "#3D4457" }}>
                {" "}
                Don't let your,
                <br /> <span className="text-primary"> Dream down! </span>{" "}
              </h1>
              <div className="my-4 ">
                <h4 className="text-secondary">
                  {" "}
                  More than 10 Courses available in FaerEdu+. Your one step
                  ahead of <span className="text-success">
                    Successful Carrier
                  </span>{" "}
                </h4>
                <br />

                <div className="d-flex">
                  <div className="col-md-1">
                    <h2>
                      {" "}
                      3300+
                      <br />
                      Students
                    </h2>
                  </div>
                  <div style={{ marginLeft: "100px" }}>
                    <h2>
                      {" "}
                      10+
                      <br />
                      Courses
                    </h2>
                  </div>
                </div>
                <br/>
                <br/>
                  <Link to='/course' > <button className="btn btn-outline-primary"> Visit our all Course</button>  </Link>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default FeaturedService;

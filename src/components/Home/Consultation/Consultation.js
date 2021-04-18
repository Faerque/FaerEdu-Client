import React from "react";
import Consulting from "../../../images/Consulting.jpg";
import Fade from "react-reveal/Fade";

const Consultation = () => {
  return (
    <section>
      <div className="container mb-5">
        <Fade>
          <div className="row align-self-center mt-5">
            <div className="col-md-6 mx-auto align-self-center">
              <h2 style={{ color: "#3D4457" }}>
                {" "}
                <span className="text-warning"> Confused</span> which course{" "}
                <br /> Right for you ? <br /> <br /> No Problem! <br />
                Let us Consult you...{" "}
              </h2>
              <p className="text-secondary my-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci soluta perferendis quidem hic atque ullam non suscipit
                cum illo veniam ipsum assumenda unde repellendus voluptatum
                officiis fugiat, nam praesentium earum?
              </p>
              <button className="btn btn-outline-dark">
                {" "}
                lets have a chat with our Mentor{" "}
              </button>
              <br />
            </div>
            <div className="col-md-5 mb-4 m-md-0">
              <img
                src={Consulting}
                width="480px"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Consultation;

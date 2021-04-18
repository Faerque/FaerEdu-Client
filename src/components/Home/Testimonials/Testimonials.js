import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://lit-hamlet-54538.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);

  return (
    <section className="testimonials container mt-5 mb-5">
      <div className="">
        <div className="section-header">
          <h1 style={{ color: "#3D4457" }}>
            {" "}
            What's Our Students <br /> <span className="text-primary"> Says,</span>{" "}
          </h1>
        </div>
       <div className="d-flex justify-content-center">
       <div className="w-75 row pt-4">
          {reviews.map((testimonial) => (
            <Testimonial testimonial={testimonial}> </Testimonial>
          ))}
        </div>
       </div>
      </div>
    </section>
  );
};

export default Testimonials;

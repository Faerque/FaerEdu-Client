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
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
          <h5 className="text-primary"> TESTIMONIALS </h5>
          <h1 style={{ color: "#3D4457" }}>
            {" "}
            What's Our Students <br /> Says{" "}
          </h1>
        </div>
        <div className="card-deck d-flex mt-5">
          {reviews.map((testimonial) => (
            <Testimonial testimonial={testimonial}> </Testimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

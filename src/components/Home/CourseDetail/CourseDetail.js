import React, { useState } from "react";
import CourseForm from "../CourseForm/CourseForm";

const CourseDetail = ({ course, date }) => {

  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div
      style={{ margin: "15px" }}
      className="container mx-auto shadow-sm col-md-4 text-center mb-3">
      <img style={{ height: "100px" }} src={course.imageURL} alt="" />
      <h4 className="mt-3 mb-4"> {course.name} </h4>
      <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquid.</p>
      <p className="text-secondary">
        {" "}
        <span className="text-primary">{course.status}</span>{" "}
      </p>
      <button onClick={openModal} className="btn btn-outline-success mb-4">Enroll Now</button>
      <CourseForm date={date} modalIsOpen={modalIsOpen} closeModal={closeModal} courseName={course.name} coursePrice={course.price} courseImage={course.imageURL} courseStatus={course.status} >  </CourseForm>
    </div>
  );
};

export default CourseDetail;

import React, { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import { UserContext } from "../../../App";
import ProcessPayment from "../../ProcessPayment/ProcessPayment";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const CourseForm = ({
  date,
  modalIsOpen,
  closeModal,
  courseName,
  coursePrice,
  courseImage,
  courseStatus,
}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    data.userName = loggedInUser.name;
    data.email = loggedInUser.email;
    data.date = date;
    data.enrolledCourse = new Date();
    data.courseName = courseName;
    data.coursePrice = coursePrice;
    data.courseStatus = courseStatus;

    console.log(data);
    fetch("https://lit-hamlet-54538.herokuapp.com/addCourseCart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        closeModal();
        alert("Congrats! Course has been successfully enrolled");
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Fade>
          <div className="row">
            <div className="col-md-5">
              <h1 className="text-primary"> {courseName}</h1>
            </div>

            <div className="col-4">
              <img
                src={courseImage}
                className="img-fluid"
                style={{ maxWidth: "250px" }}
                alt=""
              />
            </div>
          </div>
          <hr />
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <h6 className="text">
                Fill up your Information to access this course on{" "}
                {date.toDateString()}
              </h6>
              <br />
              <input
                type="text"
                ref={register({ required: true })}
                name="name"
                placeholder={loggedInUser.name}
                className="form-control"
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <br />

            <div className="form-group">
              <input
                type="text"
                ref={register({ required: true })}
                name="phone"
                placeholder="Phone Number"
                className="form-control"
              />
              {errors.phone && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <br />
            <div className="form-group row"></div>
            <br />
            <div className="form-group">
              <button type="submit" className="btn btn-outline-primary col-4">
                Send
              </button>
            </div>
          </form>
          <div className="col-md-12 p-5 ">
            <h5 className="text">Donate us</h5>
            <ProcessPayment> </ProcessPayment>
            <br />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CourseForm;

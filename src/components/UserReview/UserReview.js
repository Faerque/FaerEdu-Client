import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import AdminSidebar from "../Admin/AdminSidebar/AdminSidebar";
import Sidebar from "../Sidebar/Sidebar";

const UserReview = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    data.Name = loggedInUser.name;
    data.image = loggedInUser.image;

    fetch("https://lit-hamlet-54538.herokuapp.com/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        alert("Thanks for the review");
      });

    console.log(data);
  };

  return (
    <section className="container">
      <nav class="navbar navbar bg-light">
        <Link className="navbar-brand  mx-5 " to="/">
          <h2>
            {" "}
            <span className="text-primary">FaerEdu+</span>
          </h2>
        </Link>
      </nav>
      <div className="row">
        <div className="col-md-2 mt-5">
          <AdminSidebar> </AdminSidebar>
        </div>
        <div className="col-md-4 shadow mt-5">
          <div className="form-group">
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                ref={register({ required: true })}
                name="review"
                placeholder="Give us a review"
                className="form-control"
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group">
                <br />
                <button type="submit" className="btn btn-outline-primary col-4">
                  Send
                </button>
              </div>
            </form>
            <Link to="/" className="btn btn-outline-primary">
              {" "}
              Back To home{" "}
            </Link>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReview;

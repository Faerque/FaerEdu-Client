import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const MakeAdmin = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fetch("https://lit-hamlet-54538.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        alert("Admin Successfully Added");
      });

    console.log(data);
  };

  return (
    <section className="container">
      <div className="row">
        <nav class="navbar navbar bg-light">
          <Link className="navbar-brand mx-5 " to="/">
            <h2>
              {" "}
              <span className="text-primary">FaerEdu+</span>
            </h2>
          </Link>
        </nav>
        <div className="col-md-2 mt-5">
          <AdminSidebar> </AdminSidebar>
        </div>
        <div className="col-md-4 mx-4 mt-5">
          <div className="form-group">
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                ref={register({ required: true })}
                name="email"
                placeholder="exa"
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

export default MakeAdmin;

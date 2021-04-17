import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripHorizontal,
  faPlus,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const AddCourse = () => {
  const { register, handleSubmit } = useForm();

  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      name: data.Name,
      price: data.Price,
      weight: data.Weight,
      imageURL: imageURL,
    };
    const url = `https://lit-hamlet-54538.herokuapp.com/addCourse`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("Server Side Response"));

    console.log(productData);

    console.log(data);
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "5dc30880cfd63d352ae7c44ec36ac310");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="container align-items-center">
      <nav class="navbar navbar bg-light">
        <Link className="navbar-brand  mx-5 " to="/">
          <h2>
            {" "}
            <span className="text-primary">FaerEdu+</span>
          </h2>
        </Link>
      </nav>
      <div className="row">
        <div className="col-md-2 m-5">
          <AdminSidebar> </AdminSidebar>
        </div>
        <div className="col-md-4 m-5 shadow p-3">
          <h3> Add your Course here </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="Name"
              placeholder="Enter Name"
              ref={register({ required: true })}
            />

            <p> Course Name </p>

            <input
              name="Price"
              placeholder="Enter Price"
              ref={register({ required: true })}
            />

            <p> Add Price </p>

            <input
              name="Status"
              placeholder="Enter Status"
              ref={register({ required: true })}
            />

            <p> Status </p>

            <input
              name="Image"
              type="file"
              className="input"
              ref={register({ required: true })}
              onChange={handleImageUpload}
            />

            <br />
            <br />
            <input className="btn btn-outline-success" type="submit" />
          </form>
          <br />
          <Link to="/adminDashboard">
            {" "}
            <button className="btn btn-outline-primary">
              {" "}
              Back to Dashboard{" "}
            </button>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddCourse;

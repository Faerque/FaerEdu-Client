import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import { Link } from 'react-router-dom';
import CourseHeader from "../CourseHeader/CourseHeader";
import Footer from "../../Shared/Footer/Footer";
import Courses from "../Courses/Courses";

const Course = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);    return (
        <main>
            <nav
        style={{ borderRadius: "10px" }}
        class="navbar navbar-light bg-light"
      >
        <Link className="navbar-brand mx-5" to="/">
          <h2>
            {" "}
            <span className="text-primary">FaerEdu+</span>
          </h2>
        </Link>
        <h3 className="mx-4"> {loggedInUser.name} </h3>
      </nav>
      <CourseHeader handleDateChange={handleDateChange} >  </CourseHeader>
      <Courses date={selectedDate} > </Courses>
      <Footer> </Footer>
        </main>
    );
};

export default Course;
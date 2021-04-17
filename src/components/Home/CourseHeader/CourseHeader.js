import React from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import BookingCourse from '../../../images/bookingCourse.png'

const CourseHeader = ({handleDateChange}) => {
    return (
        <main
        style={{ height: "500px" }}
        className="row mx-5 d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: "#3A4256" }}> Select a Date </h1>
          <br/>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-4">
          <img src={BookingCourse} alt="" className="fluid d-none d-xl-block" width="600px" />
        </div>
      </main>
    );
};

export default CourseHeader;
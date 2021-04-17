import React from "react";
import teacher from '../../../images/teacher.png';
import test from '../../../images/exam.png';
import support from '../../../images/instant_support.png';
import teachingWithCare from '../../../images/teachingCare.png';
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import onlineClass from '../../../images/online class.png';
import teamWork from '../../../images/team work.png'
import Fade from 'react-reveal/Fade';




const serviceData = [
    {
        name: 'Best Teacher',
        detail: 'FaerEdu+ giving you the best teacher instructor available in town',
        img: teacher
    },
    {
        name: 'Weekly Test',
        detail: 'Practice makes anyone perfect. So, be sure you attend our all best weekly test to makes you more perfect',
        img: test
    },
    {
        name: 'Support',
        detail: 'Our instructors are always ready to serve you',
        img: support
    },
    {
        name: 'Teaching with care',
        detail: 'Not everyone has same way to catch. We gives our best teaching to ensure that everyone learned',
        img: teachingWithCare
    },
    {
        name: 'Online Classes',
        detail: 'Our maximum courses are available on online. So, anyone can access from anywhere',
        img: onlineClass
    },
    {
        name: 'Team Work',
        detail: 'We give a project to course enrolled students, and divide them into team for finish the project in team',
        img: teamWork
    },
]

const Services = () => {
  return (
    <section className="services-container mt-5 mb-5" >
         <Fade bottom cascade >
      <div className="text-center">
        <h4 style={{color: 'black'}} > Why FaerEdu+ ? </h4>
        <h1> Because we provide the best </h1>
      </div>
          
      <div className="d-flex justify-content-center">
        <div className="w-75 row pt-4 " >
            {
                serviceData.map((service) => <ServiceDetail service={service} >  </ServiceDetail> )
            }
        </div>
      </div>
          </Fade>
    </section>
  );
};

export default Services;

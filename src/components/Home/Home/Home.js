import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import FeaturedCourse from "../FeaturedCourse/FeaturedCourse";
import Services from "../Services/Services";


import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar> </Navbar>
      <Services> </Services>
      <FeaturedCourse> </FeaturedCourse>
      <Testimonials>  </Testimonials>
      <Blog>  </Blog>
      
      <Contact> </Contact>
      <Footer>  </Footer>
    </div>
  );
};

export default Home;

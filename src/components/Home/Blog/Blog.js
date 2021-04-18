import React from 'react';
import wilson from "../../../images/Wilson.png";
import BlogPost from "../BlogPost/BlogPost";
import './Blog.css';

const blogData = [
    {
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore animi vero magnam nulla",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "Mrs. Momina",
      authorImg: wilson,
      date: "23 April 2020",
    },
    {
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore animi vero magnam nulla",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "Mrs. Momina",
      authorImg: wilson,
      date: "23 April 2020",
    },
    {
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore animi vero magnam nulla",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "Mrs. Momina",
      authorImg: wilson,
      date: "23 April 2020",
    },
  ];
  

const Blog = () => {
    return (
        <section className="blogs my-5 container" >
        <div className="row">
            <div className="section-header text-center">
                
                <h1 style={{color: '#3D4457'}} >Blogs you need to <span className="text-primary"> Read...</span> </h1>
            </div>
            <div className="card-deck mt-5">
                {
                    blogData.map(blog => <BlogPost blog={blog} >  </BlogPost>)
                }
            </div>
        </div>

    </section>
    );
};

export default Blog;
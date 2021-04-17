import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faList } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <section className="container">
            <div className="row p-3 shadow">
                <Link style={{textDecoration: 'none'}} to="/dashboard" > <p> <FontAwesomeIcon icon={faList} /> <span> Course List</span> </p> </Link> 
                <Link style={{textDecoration: 'none'}} to="/userReview" > <p> <FontAwesomeIcon icon={faCommentDots} /> <span> Review</span> </p> </Link> 
               
            </div> 
        </section>  
    );
};

export default Sidebar;
import React from 'react';
import Fade from 'react-reveal/Fade';

const Testimonial = ({testimonial}) => {
    return (
        <Fade bottom cascade>
        <div className="card shadow-sm" style={{margin: '10px'}} >
        <div className="card-body">
            <p className="card-text text-center "> {testimonial.review} </p>
        </div>
        <div className="d-flex mx-auto m-3">
            <img src={testimonial.image} alt="" width="60" className="mx-3"/>
            <div> 
                <h6 className="text-primary" >
                    {testimonial.Name}
                </h6>
                {/* <p className="m-0"> {testimonial.} </p> */}
            </div>
        </div>
        
    </div>
    </Fade>
    );
};

export default Testimonial;
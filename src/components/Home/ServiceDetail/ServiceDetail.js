import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div style={{padding: '15px'}} className="mx-auto col-md-4 text-center mb-3">
         
          <img style={{ height: '100px'}} src={service.img} alt=""/>
            <h4 className="mt-3 mb-4">  {service.name} </h4>
            <p className="text-secondary" > {service.detail} </p>
        </div>
    );
};

export default ServiceDetail;
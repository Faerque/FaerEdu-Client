
import { Link } from "react-router-dom";

import AdminSidebar from "../AdminSidebar/AdminSidebar";


const AdminDashboard = () => {
 
  return (
    <main className="container">
      <nav class="navbar navbar bg-light">
        <Link className="navbar-brand  mx-5 " to="/">
          <h2>
            {" "}
            <span className="text-primary">FaerEdu+</span>
          </h2>
        </Link>
      </nav>
      <div className="row">
        <div className="col-md-2 my-5">
          <div className="p-3 ">
            <AdminSidebar> </AdminSidebar>
          </div>
        </div>
        <div className="col-md-10 p-3 my-5">
          <div className="text-right">
           <h4> Welcome to Dashboard </h4>
           <br/>
         
           
            <Link to="/">
              {" "}
              <button className="shadow btn btn-outline-primary">
                {" "}
                Back to Home{" "}
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;

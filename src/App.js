import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import { createContext, useState } from "react";
import LoginUserInfo from "./components/Login/LoginUserInfo/LoginUserInfo";
import Contact from "./components/Home/Contact/Contact";
import Course from "./components/Home/Course/Course";
import DonateUs from "./components/DonateUs/DonateUs";
import Dashboard from "./components/Dashboard/Dashboard";
import UserReview from "./components/UserReview/UserReview";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AddCourse from "./components/Admin/AddCourse/AddCourse";
import ManageCourse from "./components/Admin/ManageCourse/ManageCourse";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import CourseByUser from "./components/Admin/CourseByUser/CourseByUser";
import EnrolledCourses from "./components/EnrolledCourses/EnrolledCourses";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="page-container mx-auto">
        <div className="content-warp">
          <Router>
            <Switch>
              <Route path="/login">
                <Login> </Login>
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard> </Dashboard>
              </PrivateRoute>
              <PrivateRoute path="/adminDashboard">
                <AdminDashboard> </AdminDashboard>
              </PrivateRoute>  
              <PrivateRoute path="/addCourse">
                <AddCourse> </AddCourse>
              </PrivateRoute>
              <PrivateRoute path="/orderList">
                <CourseByUser>  </CourseByUser>
              </PrivateRoute>
              <PrivateRoute path="/enrolledCourse">
              <EnrolledCourses> </EnrolledCourses>
              </PrivateRoute>
              <PrivateRoute path="/makeAdmin">
              <MakeAdmin>  </MakeAdmin>
              </PrivateRoute>
              <PrivateRoute path="/manageCourse">
                <ManageCourse> </ManageCourse>
              </PrivateRoute>
              <PrivateRoute path="/userReview">
                <UserReview> </UserReview>
              </PrivateRoute>
              <PrivateRoute path="/loginUserInfo">
                <LoginUserInfo> </LoginUserInfo>
              </PrivateRoute>
              <Route path="/donateUs">
                <DonateUs> </DonateUs>
              </Route>
              <PrivateRoute path="/course">
                <Course> </Course>
              </PrivateRoute>
              <Route path="/contactUs">
                <Contact> </Contact>
              </Route>
              <Route path="/">
                <Home> </Home>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;

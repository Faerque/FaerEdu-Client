import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../../images/sign in.jpg';
import { Link } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Fade from 'react-reveal/Fade';


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      console.log(result);
      const { displayName, email, photoURL } = result.user;
      const signedInUser = { name: displayName, email, image: photoURL }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div className="login-page container">

      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-5 mx-auto p-5">
        <Fade right cascade>
      <h1>Welcome to <br/><span className="text-primary">FaerEdu+</span></h1> 
      <hr/>
      <br/>
          <form action="">
            <h5> Please Login to your <br/> <span className="text-primary">FaerEdu+</span>account</h5>
            <br/>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="Name">User Name</label>
                <input type="text" placeholder="Ema Waston"></input>
              </div>
              <br />
              <div className="input-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  placeholder="Emawaston@yahoomail.com"
                ></input>
              </div>
          
          
            </div>
          </form>
          <div className="from-group mt-5">
            <button className="btn btn-outline-success" onClick={handleGoogleSignIn}>Google Sign in</button>
           <Link style={{textDecoration: 'none'}} to="/home"> <button className="btn btn-outline-danger">Back to Home </button> </Link>
          </div>
          </Fade>
        </div>
        <div className="col-md-5 d-none d-md-block align-self-middle">
          <Fade big>
          <img className="img-fluid" src={LoginBg} alt="" />
          </Fade>
        </div>
      </div>
     
    </div>
  );
};

export default Login;
import React, { useState } from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import Validation from "../../models/Validation";
import { useNavigate ,Link} from 'react-router-dom'
import axios from "axios";
import SchoolUpdate from "../schoolupdate/SchoolUpdate";
import School from "../school/School";


const handleFacebookLogin = () => {
  // Redirect to Facebook login page
  window.location.href = 'https://www.facebook.com/login'; // Replace with the actual Facebook login URL
};

const handleGoogleLogin = () => {
  // Redirect to Google login page
  window.location.href = 'https://accounts.google.com'; // Replace with the actual Google login URL
};

const handleInstagramLogin = () => {
  // Redirect to Instagram login page
  window.location.href = 'https://www.instagram.com/accounts/login'; // Replace with the actual Instagram login URL
};

export default function Login() {
  
  const navigate = useNavigate();
const [values , setValues]=useState({
            email:"",
            password:"",
            showPassword:false,
})

const[errors,setErrors]=useState({})

function handleInput(event){
  const newObj = {...values,[event.target.name]:event.target.value}
  setValues(newObj)
}

function handleValidation(event) {
  event.preventDefault();
  setErrors(Validation(values));

  // Assuming you have a backend route '/login' to handle authentication
  axios.post("http://localhost:8080/login", values)
  .then((response) => {
    // console.log("User logged in successfully", response.data);
    console.log(response.data.user.isAdmin)
    if(response.data.user.isAdmin===true){
      navigate("/volunteer")
      return ;
    }
    else{
<School ids={response.data.user._id}/>
      navigate("/schools"); 
    }
  
  })
  .catch((error) => {
    console.error("Login failed", error);
    // Handle login failure, display an error message, etc.
  });
}

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left-side background image */}
        <div className="col-md-4 leftsideLogins d-flex flex-column align-items-start justify-content-end ">
          <span className="text-white fs-2 text-center mb-4 fw-bold">
            Join us as a volunteer and make a difference in the lives of
            students
          </span>
        </div>

        {/* Right-side form */}
        <div className="col-md-8 rightsideLogin ">
          <h2 className="h2">Login</h2>
          <form onSubmit={handleValidation}>
            <div className="mb-3 d-flex  justify-content-center align-items-center customs">
              <div className="form-check custom">
                <input
                  type="radio"
                  className="form-check-input "
                  id="admin"
                  name="role"
                  value="admin"
                />
                <label className="form-check-label " htmlFor="admin">
                  Admin
                </label>
              </div>
              <div className="form-check custom ">
                <input
                  type="radio"
                  className="form-check-input"
                  id="volunteer"
                  name="role"
                  value="volunteer"
                />
                <label className="form-check-label" htmlFor="volunteer">
                  Volunteer
                </label>
              </div>
            </div>

            {/* <!-- Input field for 'username' label --> */}
            <label htmlFor="email" className="labelUsername">
              Username
            </label>
            <div className="d-flex  flex-column align-items-center justify-content-center  box1">
              <div className="d-flex  align-items-center justify-content-center  ">
                <Icon icon="mdi:user-outline" className="icon" />
                <input
                  type="text"
                  name="email"
                  className="inputs"
                  id="email"
                  placeholder="Your email"
                  onChange={handleInput}
                />
              
              </div>
              {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            </div>

            {/* <!-- Password input field for 'password' label --> */}
            
            <label htmlFor="password" className="labelPassword" >
              password
            </label>
            <label htmlFor="password" className="labelForgot" style={{ color: "#1877F2" }}>
              forgot
            </label>
           
            <div className="d-flex  flex-column align-items-center justify-content-center  box1">
              <div className="d-flex  align-items-center justify-content-center  ">
                <Icon icon="material-symbols:lock-outline" className="icon" />
                <input
                  type={values.showPassword ? "text" : "password"}
                  className="inputs"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  onChange={handleInput}
                />
                
                <Icon icon="formkit:hidden" className="hidden"
                 onClick={() =>
                  setValues({ ...values, showPassword: !values.showPassword })
                }
                />
              </div>
              {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            </div>

            <div className="form-check d-flex align-items-center justify-content-center box2">
              <input type="checkbox" className="form-check-input" />
              <label className="label-checkBox" htmlFor="myCheckbox">
                Remember username
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-center  m-4">
            <button type="submit" className="btn btn-primary btn">
              Login
            </button>
            </div> 
          </form>

  <p>or login with</p>
         
          <div className="d-flex justify-content-center align-items-center ">
          <Icon icon="logos:facebook" className="icons" onClick={handleFacebookLogin} />
        <Icon icon="devicon:google" className="icons" onClick={handleGoogleLogin} />
        <Icon icon="skill-icons:instagram" className="icons" onClick={handleInstagramLogin} />
          </div>
          <div className="d-flex  justify-content-center align-items-center m-2">
            <span>Don’t have an account? </span>
            <Link to={'/signup'}> <a className="button" style={{ color: "#1877F2" }}>Register now</a></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

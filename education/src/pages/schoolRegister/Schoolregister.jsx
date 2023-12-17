import "./Schoolregister.css";
import React, { useState } from "react";
import Validation from "../../models/Validation";
import axios from "axios"; // Import Axios
import { useNavigate, Link } from "react-router-dom";

export default function Schoolregister() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    schoolname:"",
      subject:"",
      address:"",
      city:"",
      state:"",
      verification:"",
      email:"",
      phoneno:"",
      password:"",
    confirmPassword: "", // Add confirmPassword field
  });

  const [errors, setErrors] = useState({});

  function handleInput(event) {
 
      const newObj = { ...values, [event.target.name]: event.target.value };
      setValues(newObj);
    
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));

    // Check if passwords match
 // Check if passwords match
if (values.password !== values.confirmPassword) {
  setErrors((prevErrors) => ({
    ...prevErrors,
    confirmPassword: "Passwords do not match",
  }));
  return;
}



    // If validation passes, send the data to the backend using Axios
    axios
      .post("http://localhost:8080/school/signup", values)
      .then((response) => {
        console.log("User registered successfully", response.data);
        // Redirect to login page or any other route after successful registration
        navigate("/schoollogin"); // Example: Redirect to login page
      })
      .catch((error) => {
        console.error("Registration failed", error);
        // Handle error
      });
  }

  return (
    <div className="Signup">
      <h3 className="h3s">Schools Registration</h3>
      <form action="" onSubmit={handleValidation}>
        <div className="formside">
          <div className="formright">
            <label htmlFor="schoolname">SchoolName</label>
            <input
              type="text"
              placeholder="Enter your school name"
              className="forminput"
              id="schoolname"
              name="schoolname"
              onChange={handleInput}
            />
            {errors.schoolname && (
              <p style={{ color: "red" }}>{errors.schoolname }</p>
            )}
          </div>

          <div className="formleft">
            <label htmlFor="subject">Need subject</label>
            <input
              type="text"
              placeholder="Enter you need subjects"
              className="forminput"
              name="subject"
              onChange={handleInput}
            />
            {errors.subject && (
              <p style={{ color: "red" }}>{errors.subject}</p>
            )}
          </div>
        </div>
        <div className="formside">
          <div className="formright">
            <label htmlFor="address">address</label>
            <input
              type="text"
              placeholder="address"
              className="forminput"
              name="address"
              onChange={handleInput}
            />
            {errors.address&& <p style={{ color: "red" }}>{errors.address}</p>}
          </div>
          <div className="formleft">
            <label htmlFor="city">city</label>
            <input
              type="text"
              placeholder="enter your city"
              className="forminput"
              name="city"
              onChange={handleInput}
            />
            {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
          </div>
        </div>
        <div className="formside">
          <div className="formright">
            <label htmlFor="state">state or province</label>
            <input
              type="text"
              placeholder="north"
              className="forminput"
              name="state"
              onChange={handleInput}
            />
            {errors.state && (
              <p style={{ color: "red" }}>{errors.state}</p>
            )}
          </div>
          <div className="formleft">
            <label htmlFor="verification">Verification</label>
            <input
              type="type"
              placeholder="Enter your verification"
              className="forminput"
              name="location"
              onChange={handleInput}
            />
            {errors.verification && (
              <p style={{ color: "red" }}>{errors.verification}</p>
            )}
          </div>
        </div>
        <div className="formside">
          <div className="formright">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="thananchan24@gmail.com"
              className="forminput"
              name="email"
              onChange={handleInput}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="formleft">
            <label htmlFor="phoneno">Phone Number</label>
            <input
              type="text"
              placeholder="0776756780"
              className="forminput"
              name="phoneno"
              onChange={handleInput}
            />
            {errors.phoneno && <p style={{ color: "red" }}>{errors.phoneno}</p>}
          </div>
        </div>
        <div className="formside">
          <div className="formright">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="forminput"
              name="password"
              onChange={handleInput}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <div className="formleft">
            <label htmlFor="confirmPassword">Confirm Your Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="forminput"
              name="confirmPassword" // Change name to confirmPassword
              onChange={handleInput}
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword}</p>
            )}
          </div>
        </div>
        
 
        <div className="d-flex flex-column justify-content-center align-items-center cus">
          <p className="texths">
            By clicking the signup button, you agree to our Terms and condition
            and policy privacy,
          </p>
          <h3 className="texths">
            Already have an account?{" "}
            <Link to="/school/login" style={{ color: "#1877F2" }} className="texths">
              Login here
            </Link>
          </h3>
          <button className="button">Register</button>
        </div> 
      </form>
    </div>
  );
}

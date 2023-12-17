import "./SchoolUpdate.css";
import React, { useEffect, useState } from "react";
import Validation from "../../models/Validation";
import axios from "axios"; // Import Axios
import { useNavigate, Link, useParams } from "react-router-dom";

export default function SchoolUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    schoolname:"",
      subject:"",
      address:"",
      city:"",
      state:"",
      verification:"",
      email:"",
      phoneno:"",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/school/${id}`);
        setValues(result.data);
        console.log(values._id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [1]);

  const [errors, setErrors] = useState({});

  function handleInput(event) {
   
      const newObj = { ...values, [event.target.name]: event.target.value };
      setValues(newObj);

  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));

    

    // If validation passes, send the data to the backend using Axios
    axios
      .put(`http://localhost:8080/school/${id}`, values)
      .then((response) => {
        console.log("User updated successfully", response.data);
        // Redirect to login page or any other route after successful registration
        navigate("/schools"); // Example: Redirect to login page
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
              value={values.schoolname}
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
              value={values.subject}
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
              value={values.address}
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
              value={values.city}
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
              value={values.state}
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
                value={values.verification}
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
              value={values.email}
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
              value={values.phoneno}
            />
            {errors.phoneno && <p style={{ color: "red" }}>{errors.phoneno}</p>}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center cus">
          <p className="texths">
            By clicking the signup button, you agree to our Terms and condition
            and policy privacy,
          </p>
          <button className="button">Update</button>
        </div> 
      </form>
    </div>
  );
}

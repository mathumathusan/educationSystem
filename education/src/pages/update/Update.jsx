import "./Update.css";
import React, { useEffect, useState } from "react";
import Validation from "../../models/Validation";
import axios from "axios"; // Import Axios
import { useNavigate, Link, useParams } from "react-router-dom";

export default function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    subject: "",
    address: "",
    qualification: "",
    verification: "",
    email: "",
    phoneno: "",
    experience: "",
    gender: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/volunteer/${id}`);
        // const result= await axios.get(`http://localhost:8080/volunteer/657d8c591029a976d290242d`);
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
    if (event.target.name === "gender") {
      setValues({ ...values, gender: event.target.value });
    } else {
      const newObj = { ...values, [event.target.name]: event.target.value };
      setValues(newObj);
    }
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));

    

    // If validation passes, send the data to the backend using Axios
    axios
      .put(`http://localhost:8080/volunteer/${id}`, values)
      .then((response) => {
        console.log("User updated successfully", response.data);
        // Redirect to login page or any other route after successful registration
        navigate("/volunteer"); // Example: Redirect to login page
      })
      .catch((error) => {
        console.error("Registration failed", error);
        // Handle error
      });
  }

  return (
    <div className="Signup">
      <h3 className="h3s">Volunteer Registration</h3>
      <form action="" onSubmit={handleValidation}>
        <div className="formside">
          <div className="formright">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="forminput"
              name="firstname"
              value={values.firstname}
              onChange={handleInput}
            />
            {errors.firstname && (
              <p style={{ color: "red" }}>{errors.firstname}</p>
            )}
          </div>

          <div className="formleft">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              placeholder="Enter your Last name"
              className="forminput"
              name="lastname"
              onChange={handleInput}
              value={values.lastname}
            />
            {errors.lastname && (
              <p style={{ color: "red" }}>{errors.lastname}</p>
            )}
          </div>
        </div>
        <div className="formside">
          <div className="formright">
            <label htmlFor="subject">Subject Name</label>
            <input
              type="text"
              placeholder="Maths"
              className="forminput"
              name="subject"
              onChange={handleInput}
              value={values.subject}
            />
            {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
          </div>
          <div className="formleft">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="enter your address"
              className="forminput"
              name="address"
              onChange={handleInput}
              value={values.address}
            />
            {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
          </div>
        </div>
        <div className="formside">
          <div className="formright">
            <label htmlFor="qualification">Qualification</label>
            <input
              type="text"
              placeholder="Bsc Degree"
              className="forminput"
              name="qualification"
              onChange={handleInput}
              value={values.qualification}
            />
            {errors.qualification && (
              <p style={{ color: "red" }}>{errors.qualification}</p>
            )}
          </div>
          <div className="formleft">
            <label htmlFor="verification">Verification Document</label>
            <input
              type="type"
              placeholder="Enter your verification document"
              className="forminput"
              name="verification"
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
        <div className="formside">
          <div className="formright">
            <label htmlFor="">Gender</label>
            <div className="d-flex ">
              <div className="inputradio">
                <input
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  className="form-check-input radioinput"
                  onChange={handleInput}
                  checked={values.gender === "female"}
                />
                <label htmlFor="">male</label>
              </div>
              <div className="inputradio">
                <input
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  className="form-check-input radioinput"
                  onChange={handleInput}
                  checked={values.gender === "female"}
                />
                <label htmlFor="">female</label>
              </div>
            </div>
          </div>
          <div className="formleft">
            <label htmlFor="experience">
              How many years of experience do you have?
            </label>
            <input
              type="text"
              placeholder="Enter your Last name"
              className="forminput"
              name="experience"
              onChange={handleInput}
              value={values.experience}
            />
            {errors.experience && (
              <p style={{ color: "red" }}>{errors.experience}</p>
            )}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center cus">
          <button className="button">Update</button>
        </div>
      </form>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./User.css";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { id } = useParams();
  const [values, setValues] = useState([]);
  const navigate=useNavigate();

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

  const deleteDetail = async (id) => {
    try {
      const details = await axios.delete(
        `http://localhost:8080/volunteer/${id}`
      );
      console.log(details.data);
      navigate("/volunteer")
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="topcontainer">
      <NavBar />
      <div className="container">
        <div className="raw">
          <div className="column1">
            <div className="img1">
              <h3>{values.firstname}</h3>
              <img className="img" src={values.verification} alt="" />
            </div>
          </div>

          <div className="column2">
            <div className="form-group">
              <label className="labelStyle" htmlFor="username">
                First Name:
              </label>
              <input type="text" name="username" value={values.firstname} />
            </div>

            <div className="form-group">
              <label className="labelStyle" htmlFor="email">
                Subject:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={values.subject}
              />
            </div>

            <div className="form-group">
              <label className="labelStyle" htmlFor="address">
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={values.address}
              />
            </div>
            <div className="form-group">
              <label className="labelStyle" htmlFor="email">
                Email:
              </label>
              <input type="text" id="email" name="email" value={values.email} />
            </div>

            <div className="form-group">
              <label className="labelStyle" htmlFor="qualification">
                Qualification:
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={values.qualification}
              />
            </div>
          </div>

          <div className="column3">
            <div className="form-group">
              <label className="labelStyle" htmlFor="lastname">
                Last Name:
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={values.lastname}
              />
            </div>
            <div className="form-group">
              <label className="labelStyle" htmlFor="experience">
                How many years of experience do you have:
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={values.experience}
              />
            </div>
            <div className="form-group">
              <label className="labelStyle" htmlFor="username">
                Phone Number:
              </label>
              <input
                type="text"
                id="phoneno"
                value={values.phoneno}
                name="phoneno"
              />
            </div>
            <div className="form-group">
              <label className="labelStyle" htmlFor="gender">
                Gender:
              </label>
              <input
                type="text"
                id="gender"
                value={values.gender}
                name="gender"
              />
            </div>

            <div className="form-group">
              <label className="labelStyle" htmlFor="verification">
                Verification:
              </label>
              <input
                type="text"
                value={values.verification}
                id="verification"
                name="verification"
              />
            </div>
          </div>
        </div>
        <div className="text-areas">
          <label className="labelStyle" htmlFor="message">
            About:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4" // You can set the number of visible rows
            cols="50" // You can set the number of visible columns
          />
        </div>

        <div className="buttons">
            <Link to={`/update/${values._id}`}  className="btn1">Update</Link>
          
          <button className="btn2" onClick={(e)=>deleteDetail(values._id)}>Reject</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;

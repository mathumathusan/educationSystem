import React, { useEffect, useState } from "react";
import "./School.css";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const School = (props) => {

  const ids=props.ids;
  const { id } = useParams();
  const [values, setValues] = useState([]);
  const navigate=useNavigate();

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
    <div className="topschoolcontainers">
      <NavBar />
      <div className="upBody">
        <div className="firstcontent">
          <h4>Hello, Jaffna Hindu College</h4>
          <span>
            This is your profile page. You can see the progress and also you can
            edit your details.
          </span>
          <img
            src={values.verification}
          />
        </div>
        <div className="secondcontent">
          <div className="input">
            <label htmlFor="schoolname">school name</label>
            <input type="text" id="schoolname" name="schoolname" value={values.schoolname} />
          </div>
          <div className="input">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={values.address} />
          </div>
          <div className="input">
            <label htmlFor="state">state or  province</label>
            <input type="text" id="state" name="state" value={values.state} />
          </div>
          <div className="input">
            <label htmlFor="email">email</label>
            <input type="text" id="email" name="email" value={values.email} />
          </div>
        </div>
        <div className="thirdcontent">
        <div className="input">
            <label htmlFor="subject">need subject</label>
            <input type="text" id="subject" name="subject" value={values.subject} />
          </div>
          <div className="input">
            <label htmlFor="city">city</label>
            <input type="text" id="city" name="city" value={values.city} />
          </div>
          <div className="input">
            <label htmlFor="verification">verification</label>
            <input type="text" id="verification" name="verification" value={values.verification} />
          </div>
          <div className="input">
            <label htmlFor="phoneno">phone no</label>
            <input type="text" id="phoneno" name="phoneno" value={values.phoneno} />
          </div>
        </div>
      </div>
      <div className="downBody">
        <span hidden>requirements:</span>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        {ids ? (
  <Link to={`/school/update/${values._id}`} className="btn1" >update</Link>
) : (
 
  <Link to={`/school/update/${values._id}`} className="btn1" hidden>update</Link>
)}
 {console.log("ids",ids)}
       
      </div>
      <Footer />
    </div>
  );
};

export default School;

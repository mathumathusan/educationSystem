import React, { useEffect, useState } from "react";
import "./Schools.css";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Schools() {
  const [users, setUsers] = useState([
    {
     schoolname: "KHC",
      address: "mathusan",
      subject: "maths",
      verification: "yes",
      id:"1222"
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:8080/schools");
        // Accumulate data in a separate variable
        const userData = result.data.map((element) => ({
          schoolname: element.schoolname,
          address: element.address,
          subject: element.subject,
          verification: element.verification,
          id:element._id
        }));
        // Set the state with accumulated data
        setUsers(userData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="wrappert">
        <NavBar />
 <div className="wrapper">
    
      <h2>Volunteers</h2>
      <div className="wrappercontainer">
        {users
          .filter((user) => user.isAdmin !== true)
          .map((user, index) => (
            <div key={index} className="wrapperbodyLeft">
              <img className="img" src={user.verification} alt="" />
              <div className="contentss">
                <h4>{user.schoolname}</h4>
                <div className="subcontent">
                  <div className="subject">{user.subject}</div>
                  <Link to={`/school/${user.id}`} className="more">
                    more
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
     
    </div>
    <Footer />
    </div>
   
  );
  
}

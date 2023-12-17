import React from "react";
import "./About.css";
import NavBar from "../../components/navBar/NavBar";
import { Icon } from "@iconify/react";
import Footer from "../../components/footer/Footer";

export default function About() {
  return (
    <div className="wrapper">
      <div className="wrapperTops">
        <NavBar />
        <h1>About Us...!</h1>
        <span>
          "Join hands, share knowledge,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and
          ignite the flame of learning."
          <Icon icon="line-md:pencil" />
        </span>
      </div>
      <div className="wrapperCenterTops">
        <img src="assets/items/Ellipse2.png" alt="" />
        <div className="text">
          <h1>We Make a Difference in Lives</h1>
          <span>
            As a volunteer teacher, you have the opportunity to share your
            knowledge, skills, and passion for education with those who may not
            have access to formal learning opportunities.
          </span>
        </div>
        <img src="assets/items/Rectangle30.png" alt="" />
      </div>
      <div className="wrapperCenterBottoms">
        <img src="assets/items/Rectangle 31.png" alt="" />
        <div className="text2">
          <h1>Mission Statement</h1>
          <span>
            Our goal is to use our internet platform to link enthusiastic
            volunteers with schools that are in need, resulting in powerful
            learning opportunities and promoting improvement in education. We
            firmly believe in the efficiency of volunteers and the transforming
            effects of community involvement. Our objective is to promote a
            culture of giving back and to enable people to volunteer their
            talents and time to help students' academic endeavors. We want to
            close the gap between eager volunteers and schools in need.
            Together, we can establish a cooperative and welcoming learning
            atmosphere that fosters each student's development and achievement.
          </span>
        </div>
        <img src="assets/items/Ellipse1.png" alt="" />
      </div>
      <h2>"Making a difference through education and community engagement."</h2>
      <Footer />
    </div>
  );
}

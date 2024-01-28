import React from "react";
import "./Home.css";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import NavBar from "../../components/navBar/NavBar";
import CountUp from "react-countup";
import Footer from "../../components/footer/Footer";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      
      <div className="topbarContainer">
        <NavBar />
        {/* <div className="topbarBottom">
          <input
            type="text"
            className="topbarInput"
            placeholder="search volunteer opportunities "
          />
          <SearchIcon className="searchIcon" />
        </div> */}
        <div className="input">
            <input
              className="topbarInputs"
              type="text"
              placeholder="Find Help"
            />
            <Icon icon="material-symbols:search" className="topbarInputIcon" />
          </div>
        <h1 className="text text1 ">welcome to develop </h1>
        <h1 className="text text2"> your career path...!</h1>
        <div className="text textIcon">
          <h2 className="text text3">- FIND YOUR PASSION MAKE AN IMPACT.</h2>
          <CreateIcon className="penIcon" />
        </div>
      </div>
      <div className="bodyContainer">
        <div className="bodyContainerTop">
          <img className="imageside" src="assets/items/Ellipse2.png" alt="" />
          <span className="heading1">Connecting platform</span>
          <h1 className="heading2">
            We offer completely flexible solutions and tailor each approach.
          </h1>
        </div>
        <div className="divbodyContainerTopList1">
          <ul>
            <li>Sort out the teacher's issues in small schools.</li>
            <li>
              Making an opportunities to the volunteers to serve the society.
            </li>
            <li>Being a intermediate platform for volunteers and schools.</li>
          </ul>
          <img className="items3" src="assets/items/item3.png" alt="" />
        </div>
        <div className="divbodyContainerTopList2">
          <img className="items2" src="assets/items/item2.png" alt="" />
          <ul>
            <h1 className="heading44">how we are being unique</h1>
            <li>Available of chatting options.</li>
            <li>Customizable website.</li>
            <li>
              interactive elements such as poll, video conference to provide
              users a personalized experience
            </li>
          </ul>
          <img className="imageside1" src="assets/items/Ellipse1.png" alt="" />
        </div>
        <div className="bodyContainerBottom">
          <img className="image1" src="assets/items/Rectangle 23.png" alt="" />
          <div className="bodyContainerBottomCenter">
            <img
              className="image5"
              src="assets/items/Rectangle 20.png"
              alt=""
            />
            <img className="image2" src="assets/items/school.png" alt="" />
            <span className="school">Schools</span>
            <CountUp className="schools" start={50} end={100} duration={100} suffix="+"/>
            <img className="image3" src="assets/items/volunteers.png" alt="" />
            <span className="volunteer">Volunteers</span>
            <CountUp start={10}end={200} duration={100} className="volunteers"  suffix="+"/>
          </div>
          <img className="image4" src="assets/items/item4.png" alt="" />
        </div>
        <h2 className="bottomText">"Teaching is not just about imparting knowledge; </h2>
        <h2 className="bottomText">it's about inspiring change and making a positive impact on lives."</h2>
      </div>
      <Footer/>
    </>
  );
}

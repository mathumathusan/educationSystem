import React, { useState } from "react";
import "./Help.css";
import NavBar from "../../components/navBar/NavBar";
import { Icon } from "@iconify/react";
import Footer from "../../components/footer/Footer";
import data from "../../models/data";

export default function Help() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    }
    else{
        setSelected(i);
    }
    
  };

  return (
    <div className="wrapper">
      <div className="wrapperTop">
        <NavBar />
        <div className="wrapperTopCenter">
          <h1 className="help">How can we help...?</h1>
          <div className="input">
            <input
              className="topbarInputs"
              type="text"
              placeholder="Find Help"
            />
            <Icon icon="material-symbols:search" className="topbarInputIcon" />
          </div>
        </div>
        <span className="headline">
          “Helping hands, nurturing minds, shaping futures.”
          <Icon icon="line-md:pencil" />
        </span>
      </div>
      <div className="wrapperCenterTops">
        <img src="assets/items/Rectangle 29.png" alt="" />
        <div className="text">
          <span>
            Thank you for your interest in volunteering in Volunteer Teach. We
            greatly appreciate your willingness to invest your time and efforts
            into supporting VT.
          </span>
        </div>
        <img src="assets/items/Rectangle 24.png" className="imgs" alt="" />
      </div>
      <div className="wrapperCenterBottomss">
        {data.map((item, i) => (
          <div className="item" >
            <div className="title" onClick={() => toggle(i)}>
              <span>{item.title}</span>
              <span className="icons">{selected===i?'-':'+'}</span>
            </div>
            <div className={selected===i?'contentshow':'contents'}>
              <span>{item.content}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

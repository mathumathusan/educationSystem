import React from 'react'
import "./NavBar.css"
import { useNavigate ,Link} from 'react-router-dom'

export default function NavBar() {
   //const navigate=useNavigate();
  return (
    <div className="topbarTop">
      <div className="topbarLeft">
        <img src="/assets/person/Ellipse 2.png" alt="" className="topbarImg" />
        <img src="/assets/person/VT.png" alt="" className="topbarImgtext" />
        <span className="logoText">VolunteerTeach</span>
      </div>
      <div className="topbarRight">
        <Link to={'/'}> <button className="topbarComponent">Home</button></Link>
        <Link to={'/about'}> <button className="topbarComponent">About Us</button></Link>
        <Link to={'/help'}> <button className="topbarComponent">Help</button></Link>
        <Link to={'/login'}> <button className="topbarComponent">Log In</button></Link>
        <Link to={'/signup'}> <button className="topbarComponent">Sign Up</button></Link>


        {/* anotherway to routing */}

        {/* <button className="topbarComponent" onClick={()=>navigate("/")}>Home</button>
        <button className="topbarComponent" onClick={()=>navigate("/about")}>About Us</button>
        <button className="topbarComponent" onClick={()=>navigate("/help")}>Help</button>
        <button className="topbarComponent" onClick={()=>navigate("/login")}>Log In</button>
        <button className="topbarComponent" onClick={()=>navigate("/signup")}>Sign Up</button> */}
      </div>
      </div>
  )
}

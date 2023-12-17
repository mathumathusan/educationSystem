

import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Help from "./pages/help/Help";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import School from "./pages/school/School";
import Schoolregister from "./pages/schoolRegister/Schoolregister";
import Schoollogin from "./pages/schoollogin/Schoollogin";

import Schools from "./pages/schools/Schools";
import SchoolUpdate from "./pages/schoolupdate/SchoolUpdate";
import Signup from "./pages/signup/Signup";
import Update from "./pages/update/Update";
import User from "./pages/user/User";
import Volunteer from "./pages/volunteer/Volunteer";
import {BrowserRouter, Route,Routes} from 'react-router-dom';


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/help" element={<Help/>}/>
  <Route path="/volunteer" element={<Volunteer/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/user/:id" element={<User/>}/>
  <Route path="/update/:id" element={<Update/>}/>
  <Route path="/school/:id" element={<School/>}/>
  <Route path="/school/signup" element={<Schoolregister/>}/>
  <Route path="/school/login" element={<Schoollogin/>}/>
  <Route path="/schools" element={<Schools/>}/>
  <Route path="/school/update/:id" element={<SchoolUpdate/>}/>



</Routes>
</BrowserRouter>
  );
}

export default App;

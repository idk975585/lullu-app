
import "./login.css";
import "./Nav.css";
import "./home.css";
// import "./App.css"
import "./component/img.css";
import Nav from "./component/Nav";
import Login from "./component/Login";
import {  Routes, Route } from "react-router-dom";
import Home from "./component/home";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
     
        <Nav />
       
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      
    </div>
  );
}

export default App;

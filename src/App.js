// import logo from './logo.svg';
// import './App.css';
import Forgot from "./Components/Forgot";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </Router>
  );
}

export default App;

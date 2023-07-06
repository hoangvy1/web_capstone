import "./styles.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./component/NavBar/Navbar";
import Home from "./Routes/Home";
import Temperature from "./Routes/Temperature";
import Fuel from "./Routes/Fuel";
import Speed from "./Routes/Speed";
import Location from "./Routes/Location";
import Mileage from "./Routes/Mileage";
import Login from "./component/Login/Login.jsx";

import Footer from "./component/Footer/Footer";

export default function App() {
  return (
    <>
      {/* // <NavBar /> */}
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/fuel" element={<Fuel />} />
          <Route path="/speed" element={<Speed />} />
          <Route path="/location" element={<Location />} />
          <Route path="/mileage" element={<Mileage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

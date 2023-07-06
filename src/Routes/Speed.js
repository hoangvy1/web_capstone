import Hero from "../component/Hero/Hero";
import Gauge from "../component/Gauge/gauge";
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";
import Paho from "paho-mqtt";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Char from "../component/Chart/VehicleSpeed";
import React from "react";
import NavBar from "../component/NavBar/Navbar";
import { useEffect, useState } from "react";
var mqtt = require("mqtt");
var client = new Paho.Client("broker.hivemq.com", Number(8000), "speed");

function Speed() {
  const [value, setValue] = useState();
  const [flag, setflag] = useState();
  const notify = () => {
    toast.warn("WARNING HIGH SPEED !!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    if (e > 80) {
      setOpen(true);
      notify();
    } else {
      setOpen(false);
    }
  };

  function Disconnect(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
    }
  }

  useEffect(() => {
    client.connect({
      onSuccess: () => {
        console.log("Speed Connected!");
        client.subscribe("j1939/vehicle_speed");
        client.disconnect = Disconnect;
        client.onMessageArrived = onMessageArrived;
        function onMessageArrived(message) {
          setValue(+message.payloadString);
          setflag(+message.payloadString);
        }
      },

      onFailure: () => {
        console.log("Failed to connect!");
      },
    });
  }, []);

  useEffect(() => {
    handleOpen(flag);
  });
  return (
    <>
      <NavBar />
      <Hero cName="hero" heroImg="images/bgcar.jpg" />

      <Gauge
        // value={value}
        value={value}
      />
      <Char />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        limit={1}
      />
    </>
  );
}

export default Speed;

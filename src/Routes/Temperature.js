import Paho from "paho-mqtt";
import Hero from "../component/Hero/Hero";
import Temp from "../component/Gauge/gauge_temp";
import Char from "../component/Chart/Temperature";
import React from "react";
import NavBar from "../component/NavBar/Navbar";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
var mqtt = require("mqtt");
var client = new Paho.Client("broker.hivemq.com", Number(8000), "temp");
function Temperature() {
  const [value, setValue] = useState();

  const [flag, setflag] = useState();
  const notify = () => {
    toast.warn("WARNING HIGH TEMPERATURE !!!", {
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

  console.log(open);
  useEffect(() => {
    client.connect({
      onSuccess: () => {
        console.log("Temp Connected!");
        client.subscribe("j1939/eng_ecu_temp");
        client.onMessageArrived = onMessageArrived;
        function onMessageArrived(message) {
          console.log(+message.payloadString);
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

      <Temp value={value} title="Temperature" />

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

export default Temperature;

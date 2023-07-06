import Hero from "../component/Hero/Hero";
import Card from "../component/Card/Card";
import Char from "../component/Chart/Fuel";
import Paho from "paho-mqtt";

import { useEffect, useState } from "react";
import NavBar from "../component/NavBar/Navbar";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import React from "react";

function Fuel() {
  var mqtt = require("mqtt");
  var client = new Paho.Client("broker.hivemq.com", Number(8000), "fuel");
  const [value, setValue] = useState();
  const [flag, setflag] = useState();
  const notify = () => {
    toast.warn("WARNING LOW FUEL !!!", {
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
    if (e < 20) {
      setOpen(true);
      notify();
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    client.connect({
      onSuccess: () => {
        console.log("Fuel Connected!");
        client.subscribe("j1939/eng_fuel_rate");
        client.onMessageArrived = onMessageArrived;
        function onMessageArrived(message) {
          // handleOpen(value);
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

      <Card image="images/gauge_fuel.jpg" title="Fuel" body={value + " %"} />

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

export default Fuel;

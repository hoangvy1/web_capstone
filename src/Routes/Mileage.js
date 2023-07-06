import Hero from "../component/Hero/Hero";
import Card from "../component/Card/Card";
import Paho from "paho-mqtt";
import Char from "../component/Chart/Mileage";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import React from "react";
import NavBar from "../component/NavBar/Navbar";
import { useEffect, useState } from "react";
var mqtt = require("mqtt");
var client = new Paho.Client("broker.hivemq.com", Number(8000), "mileage");
function Mileage() {
  const [value, setValue] = useState();
  const [flag, setflag] = useState();
  const notify = () => {
    toast.warn("TIME TO MAINTENANCE !!!", {
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
    if (e % 200 == 0) {
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
        console.log("Mileage Connected!");
        client.subscribe("j1939/mileage");
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
      <div class="nav-main">
        <NavBar />
      </div>

      <Hero cName="hero" heroImg="images/bgcar.jpg" />

      <Card
        image="images/gauge_mileage.jpg"
        title="Mileage"
        body={value + " Km"}
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

export default Mileage;

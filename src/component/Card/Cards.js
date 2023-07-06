import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Paho from "paho-mqtt";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
var client = new Paho.Client(
  "broker.hivemq.com",
  Number(8000),
  `mqtt-async-test-${parseInt(Math.random() * 100)}`
);
var client1 = new Paho.Client(
  "broker.hivemq.com",
  Number(8000),
  `mqtt-async-test-${parseInt(Math.random() * 100)}`
);
var client2 = new Paho.Client(
  "broker.hivemq.com",
  Number(8000),
  `mqtt-async-test-${parseInt(Math.random() * 100)}`
);
var client3 = new Paho.Client(
  "broker.hivemq.com",
  Number(8000),
  `mqtt-async-test-${parseInt(Math.random() * 100)}`
);
function Cards() {
  const [tempt, setTempt] = useState();
  const [mileage, setMileage] = useState();
  const [fuel, setFuel] = useState();
  const [speed, setSpeed] = useState();

  const handleOpen1 = (e) => {
    if (e > 80) {
      setOpen1(true);
      notify1();
    } else {
      setOpen1(false);
    }
  };
  const handleOpen2 = (e) => {
    if (e > 80) {
      setOpen2(true);
      notify2();
    } else {
      setOpen2(false);
    }
  };
  const handleOpen3 = (e) => {
    if (e < 20) {
      setOpen3(true);
      notify3();
    } else {
      setOpen3(false);
    }
  };
  const handleOpen4 = (e) => {
    if (e % 200 == 0) {
      setOpen4(true);
      notify4();
    } else {
      setOpen4(false);
    }
  };

  // warning //###############################################
  const [flag1, setflag1] = useState();
  const [flag2, setflag2] = useState();
  const [flag3, setflag3] = useState();
  const [flag4, setflag4] = useState();
  // warning //###############################################
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  // warning //###############################################
  const notify1 = () => {
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
  ////////////////////////////////////////////////////////////
  const notify2 = () => {
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
  ////////////////////////////////////////////////////////////
  const notify3 = () => {
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
  ////////////////////////////////////////////////////////////
  const notify4 = () => {
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
  ////////////////////////////////////////////////////////////
  // warning //###############################################
  useEffect(() => {
    handleOpen1(flag1);
  });
  useEffect(() => {
    handleOpen2(flag2);
  });
  useEffect(() => {
    handleOpen3(flag3);
  });
  useEffect(() => {
    handleOpen4(flag4);
  });
  // client //############################################################################################################
  useEffect(() => {
    client.connect({
      onSuccess: () => {
        console.log("client Connected!");
        client.subscribe("j1939/eng_ecu_temp");
        client.onMessageArrived = onMessageArrived;
        function onMessageArrived(message) {
          console.log(message.payloadString);
          setTempt(message.payloadString);
          setflag1(+message.payloadString);
        }
      },
      onFailure: () => {
        console.log("Failed to connect client!");
      },
    });
  }, []);
  // client1 //############################################################################################################
  useEffect(() => {
    client1.connect({
      onSuccess: () => {
        console.log("client1 Connected!");
        client1.subscribe("j1939/mileage");
        client1.onMessageArrived = onMessageArrived;
        function onMessageArrived(message) {
          console.log(+message.payloadString);
          setMileage(+message.payloadString);
          setflag4(+message.payloadString);
        }
      },
      onFailure: () => {
        console.log("client1 Failed to connect!");
      },
    });
  }, []);
  // client2 //############################################################################################################
  useEffect(() => {
    client2.connect({
      onSuccess: () => {
        console.log("client2 Connected!");
        client2.subscribe("j1939/eng_fuel_rate");
        client2.onMessageArrived = onMessageArrived;
        function onMessageArrived(message) {
          console.log(+message.payloadString);
          setFuel(+message.payloadString);
          setflag3(+message.payloadString);
        }
      },
      onFailure: () => {
        console.log("client2 Failed to connect!");
      },
    });
  }, []);
  // client3 //############################################################################################################
  useEffect(() => {
    client3.connect({
      onSuccess: () => {
        console.log("client3 Connected!");
        client3.subscribe("j1939/vehicle_speed");
        client3.onMessageArrived = onMessageArrived;
        function onMessageArrived(message) {
          console.log(message.payloadString);
          setSpeed(message.payloadString);
          setflag2(+message.payloadString);
        }
      },
      onFailure: () => {
        console.log("client3 Failed to connect!");
      },
    });
  }, []);
  var temptunit = [tempt, "℃"];
  var speedunit = [speed, "Km/h"];
  var mileageunit = [mileage, "Km"];
  var fuelunit = [fuel, "%"];
  return (
    <div className="cards">
      <h1>MY CAR</h1>

      <ul className="cards_items">
        <CardItem
          src="images/gauge_temp.jpg"
          text={temptunit}
          label="Temperature"
          path="/Temperature"
        />
        <CardItem
          src="images/gauge_fuel.jpg"
          text={fuelunit}
          label="Fuel"
          path="/Fuel"
        />

        <CardItem
          src="images/location.png"
          text="Etown 2"
          label="Location"
          path="/Location"
        />

        <CardItem
          src="images/gauge_speed.jpg"
          text={speedunit}
          label="Speed"
          path="/Speed"
        />

        <CardItem
          src="images/gauge_mileage.jpg"
          text={mileageunit}
          label="Mileage"
          path="/Mileage"
        />
      </ul>
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
    </div>
  );
}

export default Cards;

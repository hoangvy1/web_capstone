import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
// import { color } from "@mui/system";
import icons from "../../Utils/Icons";
import "./Map.css"
import Paho from "paho-mqtt"
// import { useEffect, useState } from "react";
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
  const { ImLocation } = icons

//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };
const AnyReactComponent = ({ text }) => <div>{text}</div>;
  
  function Maps() {

    

  const [coords, setCoords] = useState('')

  useEffect( () => {
    navigator.geolocation.getCurrentPosition(({coords: {longitude, latitude}}) =>{
        setCoords({lat: latitude, lng: longitude})
        
    })
  }, [])
  useEffect(() => {
    client.connect( {
      onSuccess: () => { 
      console.log("client Connected!");
      client.subscribe("topic/longt");
      client.onMessageArrived = onMessageArrived;
                    function onMessageArrived(message) {
                      console.log(message.payloadString);
                      console.log(message.payloadString);
                      // setTempt(message.payloadString);
                    }
    },
    onFailure: () => {
      console.log("Failed to connect client!"); 
    }
  });
  }, [])
  // ////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    client1.connect( {
      onSuccess: () => { 
      console.log("client Connected!");
      client1.subscribe("topic/lat");
      client1.onMessageArrived = onMessageArrived;
                    function onMessageArrived(message) {
                      console.log(message.payloadString);
                      console.log(message.payloadString);
                      // setTempt(message.payloadString);
                    }
    },
    onFailure: () => {
      console.log("Failed to connect client!"); 
    }
  });
  }, [])
    return (

        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY  }}
                // defaultCenter={defaultProps.center}
                // defaultZoom={defaultProps.zoom}
                defaultCenter={coords}
                defaultZoom={19}
                center={coords}
            >
            <AnyReactComponent
              lat={coords.lat}
              lng={coords.lng}
              text={< ImLocation color="red" size={30}/>}
            />
            </GoogleMapReact>
        </div>

    );

  }
  export default Maps;
  
import React from "react";
import Thermometer from "react-thermometer-component";
import "./gauge_temp.css";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Temp = ({ value, title }) => {
  return (
    <div className="row">
      <div className="col-4"></div>

      <div className="col-4">
        <div className="dial">
          <div className="temper">
            <Thermometer
              theme="light"
              value={value}
              max="210"
              steps="1"
              format="°C"
              size="normal"
              height="200"
            />
          </div>

          <div className="title">
            <h2>
              {" "}
              {title}: {value}°C
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;

import React from "react";
import "./CardStyles.css";

function Card(props) {
  return (
    <div className="cards">
      <h1>My Car</h1>
      <div className="card-container">
        <div className="image-container">
          <img src={props.image} alt="" />
        </div>

        <div className="card-content">
          <div className="card-title">
            <h3>{props.title}</h3>
          </div>

          <div className="card-body">
            <p>{props.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

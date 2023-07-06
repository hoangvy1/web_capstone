import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";


function Cardstemp(){
    return(
        <div className="cards">
            <h1>MY CAR</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                            src="images/car.png"
                            text="Temperature"
                            label="Temp"
                            path="/Temperature"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cardstemp;
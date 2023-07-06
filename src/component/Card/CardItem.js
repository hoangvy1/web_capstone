import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem(props){
    return(
    <>
        <li className="cards_item">
            <div className="card-container" >
                <Link className="image-container" to={props.path}>
                    <img 
                    src={props.src} 
                    alt="Car"
                    />
                </Link>

                <div className="card-content">
                    <div className="card-title">
                        <h3>{props.label}</h3>
                    </div>

                    <div className="card-body">
                        <p>{props.text}</p>
                    </div>
                </div>
            </div> 
        </li>
    </>    
    )
}

export default CardItem;
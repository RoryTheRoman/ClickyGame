import React from "react";
import "./ImageCard.css";


const ImageCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.clickedImages(props.id)}>
            <img alt={props.name} src={props.image} />
            </a>
        </div>
    </div>
);

export default ImageCard;
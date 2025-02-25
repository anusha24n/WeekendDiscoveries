import React from "react";
import "../styles/Card.css";

function Card({ image, title, alt, description, extraText, onClick }) {
  return (
    <div className="card">
      <img src={image} alt={alt} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {extraText && <p className="card-extra">{extraText}</p>}
      </div>
    </div>
  );
}

export default Card;

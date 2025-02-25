import React, { useState } from "react";
import Card from "./Card";
import "../styles/Cards.css";
import tripsData from "../data/trips";

function Cards({ onTripSelect }) {
  const featuredTripIds = [1, 2, 3, 4, 5, 6];
  const featuredTrips = tripsData.filter((trip) =>
    featuredTripIds.includes(trip.id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = featuredTrips.length;
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalCards - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="scroll-button" onClick={goToPrevious}>
        &lt;
      </button>
      <div className="carousel">
        {featuredTrips.map((trip, index) => (
          <div
            key={trip.id}
            className={`carousel-card ${
              index === currentIndex ? "active" : "hidden"
            }`}
            onClick={() => onTripSelect(trip)}
          >
            <Card
              image={trip.image}
              alt={trip.title}
              title={trip.title}
              description={trip.description}
            />
          </div>
        ))}
      </div>
      <button className="scroll-button" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
}

export default Cards;

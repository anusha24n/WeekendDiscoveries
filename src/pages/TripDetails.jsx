import React from "react";
import "../styles/TripDetails.css";

function TripDetails({ trip, goBack }) {
  if (!trip) return null;

  return (
    <div
      className="trip-details"
      id="trip-details"
      aria-label={`Details of the trip to ${trip.title}`}
    >
      <button onClick={goBack} aria-label="Go back to the previous page">
        Back
      </button>
      <h1>{trip.title}</h1>
      <img
        src={trip.image}
        alt={trip.alt}
        aria-label={`Image of ${trip.title}`}
      />
      <p>{trip.description}</p>
      <p>
        <strong>Distance:</strong> {trip.distance}
      </p>
      <p>
        <strong>Travel Time:</strong> {trip.travelTime} hours
      </p>
      <p>
        <strong>Activities:</strong> {trip.activities.join(", ")}
      </p>
      <p>
        <strong>Highlight:</strong> {trip.highlight}
      </p>
      {trip.additionalDescriptions && (
        <div
          className="additional-descriptions"
          aria-label="Additional descriptions about the trip"
        >
          <h2>Additional Descriptions</h2>
          <ul>
            {trip.additionalDescriptions.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      )}
      {trip.details && (
        <div
          className="additional-details"
          aria-label={`Plan your trip to ${trip.title}`}
        >
          <h2>Plan Your Trip</h2>
          <h3>Best Stays</h3>
          <ul aria-label="List of best stays">
            {trip.details.bestStays.map((stay, index) => (
              <li key={index}>
                {stay.name} ({stay.type})
              </li>
            ))}
          </ul>
          <h3>Airbnb</h3>
          <ul aria-label="List of Airbnb options">
            {trip.details.airbnb.map((airbnb, index) => (
              <li key={index}>{airbnb.name}</li>
            ))}
          </ul>
          <h3>Restaurants</h3>
          <ul aria-label="List of restaurants">
            {trip.details.restaurants.map((restaurant, index) => (
              <li key={index}>{restaurant}</li>
            ))}
          </ul>
          <h3>Restrooms</h3>
          <ul aria-label="List of restrooms">
            {trip.details.restrooms.map((restroom, index) => (
              <li key={index}>{restroom}</li>
            ))}
          </ul>
          <h3>Hidden Spots</h3>
          <ul aria-label="List of hidden spots">
            {trip.details.hiddenSpots.map((spot, index) => (
              <li key={index}>{spot}</li>
            ))}
          </ul>
          <h3>Fun Activities</h3>
          <ul aria-label="List of fun activities">
            {trip.details.funActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          <h3>Gas Stations</h3>
          <ul aria-label="List of gas stations">
            {trip.details.gasStations.map((station, index) => (
              <li key={index}>{station}</li>
            ))}
          </ul>
          <h3>Coffee Shops</h3>
          <ul aria-label="List of coffee shops">
            {trip.details.coffeeShops.map((shop, index) => (
              <li key={index}>{shop}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TripDetails;

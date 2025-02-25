import React, { useState } from "react";
import Card from "../components/Card";
import tripsData from "../data/trips";
import "../styles/BrowseTrips.css";

function BrowseTrips({ layout, openModal, onTripSelect }) {
  const [filter, setFilter] = useState("");

  const filteredTrips = tripsData.filter((trip) => {
    const time = trip.travelTime;
    const selectedFilter = Number(filter);

    if (filter === "") {
      return true;
    } else if (selectedFilter === 1) {
      return time < 1;
    } else if (selectedFilter === 2) {
      return time >= 1 && time <= 2;
    } else if (selectedFilter === 3) {
      return time > 2;
    }

    return true;
  });

  return (
    <div id="browse-trips" className="browse-page">
      <div className="browse-container">
        <h1>Browse Trips</h1>
        <div className="top-bar">
          <select
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter trips by travel time"
          >
            <option value="">All</option>
            <option value="1">Less than 1 hour</option>
            <option value="2">1-2 hours</option>
            <option value="3">More than 2 hours</option>
          </select>
          <button
            className="change-view-btn"
            onClick={openModal}
            aria-label="Open view settings"
          >
            View Settings
          </button>
        </div>

        <div className={`card-container ${layout}`}>
          {filteredTrips.map((trip) => (
            <div
              key={trip.id}
              className="card-wrapper"
              onClick={() => onTripSelect(trip)}
              aria-label={`Select trip to ${trip.title}`}
            >
              <Card
                image={trip.image}
                alt={trip.alt}
                title={trip.title}
                description={
                  layout === "detailed" &&
                  `${trip.description} | ${trip.distance}`
                }
                extraText={
                  layout === "detailed" && (
                    <>
                      Highlight: {trip.highlight} | Activities:{" "}
                      {trip.activities.join(", ")}
                      <br />
                      <a
                        href="#"
                        className="read-more-link"
                        aria-label={`Read more about ${trip.title}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onTripSelect(trip);
                        }}
                      >
                        Read More
                      </a>
                    </>
                  )
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseTrips;

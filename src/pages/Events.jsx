import React, { useState } from "react";
import eventsData from "../data/events.js";
import "../styles/Events.css";
import Modal from "../components/Modal";

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = (formData) => {
    setSuccessMessage(
      `Thank you for registering, ${formData.name}! You have successfully booked ${formData.tickets} tickets for ${selectedEvent.name}.`
    );
    setSelectedEvent(null);
  };

  const closeSuccessModal = () => setSuccessMessage("");

  return (
    <div id="events">
      <div className="panel-page">
        <h1>Upcoming Events</h1>
        {eventsData.map((event) => (
          <div key={event.id} className="panel">
            <div className="panel-content">
              <img
                src={event.image}
                alt={event.alt}
                className="panel-img"
                aria-label={`Event image for ${event.name}`}
              />
              <div className="panel-details">
                <h2 className="panel-title">{event.name}</h2>
                <p className="panel-description">
                  <strong>Date:</strong> {event.date} |{" "}
                  <strong>Location:</strong> {event.location} |{" "}
                  <strong>Timings:</strong> {event.timings}
                </p>
                {event.description && (
                  <p className="extra-description">{event.description}</p>
                )}
                <button
                  className="register-button"
                  onClick={() => setSelectedEvent(event)}
                  aria-label={`Register for ${event.name}`}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <Modal
          title={`Register for ${selectedEvent.name}`}
          onSubmit={handleRegister}
          onClose={() => setSelectedEvent(null)}
        />
      )}
      {successMessage && (
        <dialog
          open
          className="modal"
          aria-label="Registration success message"
        >
          <div className="modal-content">
            <h2>Success</h2>
            <p>{successMessage}</p>
            <button
              onClick={closeSuccessModal}
              aria-label="Close success modal"
            >
              Close
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Events;

import React, { useEffect, useRef, useState } from "react";
import "../styles/Modal.css";

function Modal({ title, onSubmit, onClose }) {
  const dialogRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    tickets: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const closeModal = () => {
    if (dialogRef.current) dialogRef.current.close();
    setErrors({});
    if (onClose) onClose();
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value) error = "Name is required.";
        break;
      case "email":
        if (!value) error = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format.";
        break;
      case "confirmEmail":
        if (!value) error = "Confirm email is required.";
        else if (value !== formData.email) error = "Emails must match.";
        break;
      case "tickets":
        if (!value || isNaN(value) || value <= 0)
          error = "Valid tickets count is required.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const isFormValid = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      if (onSubmit) onSubmit(formData);
      closeModal();
    }
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmEmail">Confirm Email:</label>
            <input
              type="text"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
            />
            {errors.confirmEmail && (
              <p className="error">{errors.confirmEmail}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="tickets">Number of Tickets:</label>
            <input
              type="number"
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
            />
            {errors.tickets && <p className="error">{errors.tickets}</p>}
          </div>

          <div className="modal-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Modal;

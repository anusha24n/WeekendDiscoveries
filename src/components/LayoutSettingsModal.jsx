import React from "react";
import "../styles/LayoutSettingsModal.css";

function LayoutSettingsModal({ dialogRef, layout, setLayout, closeModal }) {
  const handleLayoutChange = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedLayout = formData.get("layout");
    setLayout(selectedLayout);
    closeModal();
  };

  return (
    <dialog className="layout-modal" ref={dialogRef}>
      <form onSubmit={handleLayoutChange} className="layout-form">
        <h2>Choose Your View</h2>
        <div className="option-group">
          <label>
            <input
              type="radio"
              name="layout"
              value="detailed"
              defaultChecked={layout === "detailed"}
            />
            Detailed View
          </label>
          <label>
            <input
              type="radio"
              name="layout"
              value="compact"
              defaultChecked={layout === "compact"}
            />
            Compact View
          </label>
        </div>
        <div className="button-row">
          <button type="button" className="cancel-btn" onClick={closeModal}>
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default LayoutSettingsModal;

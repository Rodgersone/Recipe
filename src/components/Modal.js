import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ recipe, onClose }) => {
  const [closing, setClosing] = useState(false);

  if (!recipe) return null;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 1000); // ✅ only 1 second delay for smooth close
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} className="modal-img" />
        <p className="modal-category">
          <strong>Category:</strong> {recipe.category}
        </p>

        <div className="ingredients-list">
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Close button with spinner */}
        <button className="close-btn" onClick={handleClose} disabled={closing}>
          {closing ? <span className="spinner"></span> : "Close"}
        </button>
      </div>
    </div>
  );
};

export default Modal;

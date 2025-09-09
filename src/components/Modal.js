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
    }, 2000); //  2 seconds delay for smooth close
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <p><strong>Category:</strong> {recipe.category}</p>
        <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>

        {/* Close button with spinner */}
        <button className="close-btn" onClick={handleClose} disabled={closing}>
          {closing ? <span className="spinner"></span> : " Close"}
        </button>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe, onClick }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClick(recipe);
    }, 3000); //  3 seconds loading
  };

  return (
    <div className="recipe-card" data-aos="zoom-in">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>{recipe.category}</p>
      <button className="view-btn" onClick={handleClick} disabled={loading}>
        {loading ? <span className="spinner"></span> : "View Ingredients"}
      </button>
    </div>
  );
};

export default RecipeCard;

import React, { useState, useEffect } from "react";
import Modal from "../components/Modal"; // use the same modal component we built earlier
import "./Recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setRecipes((data.meals || []).slice(0, 6))); // only 6
  }, []);

  return (
    <section className="recipes-section" data-aos="fade-up">
      {/* Hero */}
      <div className="recipes-hero">
        <h1> Explore Recipes</h1>
        <p>Discover 6 tasty dishes to get you started!</p>
      </div>

      {/* Grid */}
      <div className="container">
        <div className="row g-4">
          {recipes.length > 0 ? (
            recipes.map((meal) => (
              <div className="col-12 col-md-6 col-lg-4" key={meal.idMeal}>
                <div className="recipe-card" data-aos="zoom-in">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="recipe-img"
                  />
                  <div className="recipe-content">
                    <h3>{meal.strMeal}</h3>
                    <p>{meal.strArea} | {meal.strCategory}</p>
                    <button
                      className="recipe-btn"
                      onClick={() => setSelectedRecipe(meal)}
                    >
                      View Ingredients
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">Loading recipes...</p>
          )}
        </div>
      </div>

      {/* Modal for ingredients */}
      <Modal
        recipe={
          selectedRecipe && {
            name: selectedRecipe.strMeal,
            image: selectedRecipe.strMealThumb,
            category: selectedRecipe.strCategory,
            ingredients: Array.from({ length: 20 })
              .map((_, i) => selectedRecipe[`strIngredient${i + 1}`])
              .filter(Boolean),
          }
        }
        onClose={() => setSelectedRecipe(null)}
      />
    </section>
  );
};

export default Recipes;

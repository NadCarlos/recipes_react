// RecipeList.js
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';

export default function RecipeList() {
  const { recipes, deleteRecipe } = useRecipes();
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Lista de Recetas</h1>
        <button className="btn btn-primary" onClick={() => navigate('/add-recipe')}>Añadir Nueva Receta</button>
      </div>
      <div className="row">
        {recipes.map(recipe => (
          <div key={recipe.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{recipe.name}</h3>
                <p className="card-text">{recipe.description}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-danger" onClick={() => deleteRecipe(recipe.id)}>Eliminar</button>
                  <button className="btn btn-secondary" onClick={() => navigate(`/recipe/${recipe.id}`)}>Ver Detalles</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

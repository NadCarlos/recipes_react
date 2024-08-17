import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';


export default function RecipeDetails() {
  const { recipes } = useRecipes();
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscar la receta correspondiente por ID
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div>Receta no encontrada.</div>;
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate('/')}>
        Volver a la Lista de Recetas
      </button>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{recipe.name}</h2>
          <p className="card-text">{recipe.description}</p>
        </div>
      </div>
    </div>
  );
}
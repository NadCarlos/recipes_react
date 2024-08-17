// AddRecipe.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';

export default function AddRecipe() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ name, description });
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h1>Añadir Nueva Receta</h1>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Nombre de la Receta</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Añadir Receta</button>
      </form>
    </div>
  );
}

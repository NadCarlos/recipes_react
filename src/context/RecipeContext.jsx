// RecipeContext.js
import React, { createContext, useState, useContext } from 'react';

const RecipeContext = createContext();

export const useRecipes = () => {
  return useContext(RecipeContext);
};

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    { id: 1, name: 'Spaghetti', description: 'Delicious spaghetti with tomato sauce' },
    { id: 2, name: 'Tacos', description: 'Tacos with beef and vegetables' },
  ]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

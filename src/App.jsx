// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddRecipe from './components/AddRecipe';
import { RecipeProvider } from './context/RecipeContext';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetail';

function App() {
  return (
    <RecipeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Añadir la ruta para RecipeDetails */}
        </Routes>
      </Router>
    </RecipeProvider>
  );
}

export default App;

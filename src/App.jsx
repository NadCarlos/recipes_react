// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AddRecipe from './components/AddRecipe';
import { RecipeProvider } from './context/RecipeContext';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetail';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import Header from './components/Header';

function App() {
  const loggedInUser = sessionStorage.getItem('loggedInUser');

  return (
    <RecipeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Protegiendo las rutas */}
          <Route 
            path="/" 
            element={loggedInUser ? <RecipeList /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/add-recipe" 
            element={loggedInUser ? <AddRecipe /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/recipe/:id" 
            element={loggedInUser ? <RecipeDetails /> : <Navigate to="/login" />} 
          />
        </Routes>
      </Router>
    </RecipeProvider>
  );
}

export default App;

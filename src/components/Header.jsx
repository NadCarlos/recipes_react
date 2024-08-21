// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './Logout';

export default function Header() {
  const navigate = useNavigate();
  const loggedInUser = sessionStorage.getItem('loggedInUser');

  return (
    <header className="bg-dark text-white p-3 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          App de Recetas
        </h1>

        <nav>
          {loggedInUser ? (
            <>
              <button className="btn btn-primary me-2" onClick={() => navigate('/add-recipe')}>
                Añadir Receta
              </button>
              <LogoutButton />
            </>
          ) : (
            <>
              <button className="btn btn-success me-2" onClick={() => navigate('/login')}>
                Iniciar Sesión
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('/register')}>
                Registrarse
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

// LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Cerrar Sesión
    </button>
  );
}

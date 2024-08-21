// RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find(user => user.username === username);

    if (userExists) {
      alert('El nombre de usuario ya está en uso.');
    } else {
      const newUser = { username, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Usuario registrado exitosamente.');
      navigate('/login');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input 
            type="text" 
            className="form-control"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input 
            type="password" 
            className="form-control"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
}

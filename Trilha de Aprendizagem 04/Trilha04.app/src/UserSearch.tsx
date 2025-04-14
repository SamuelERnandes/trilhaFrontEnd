import React, { useState } from 'react';
import axios from 'axios';

interface User {
  name: string;
  email: string;
}

const UserSearch: React.FC = () => {
  const [id, setId] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(response.data);
      setError('');
    } catch (err) {
      setUser(null);
      setError('Usuário não encontrado.');
    }
  };

  return (
    <div>
      <h2>Buscar Usuário pelo ID</h2>
      <input
        type="number"
        placeholder="Digite o ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {user && (
        <div>
          <p>
            <strong>Nome:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UserSearch;

import React, { useState } from 'react';
import axios from 'axios';

const UserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://jsonplaceholder.typicode.com/users', {
        name,
        email,
      });
      setMessage(' Usuário cadastrado com sucesso!');
      setName('');
      setEmail('');
    } catch (err) {
      setMessage(' Erro ao cadastrar usuário.');
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>📝 Cadastrar Novo Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
};

export default UserForm;

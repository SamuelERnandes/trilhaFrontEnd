import React from 'react';
import UserSearch from './components/UserSearch';
import UserForm from './components/UserForm';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📘 Sistema de Usuários</h1>
      <UserSearch />
      <hr style={{ margin: '2rem 0' }} />
      <UserForm />
    </div>
  );
}

export default App;

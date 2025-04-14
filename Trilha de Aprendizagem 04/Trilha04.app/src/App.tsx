import React from 'react';
import UserSearch from './UserSearch';
import UserForm from './UserForm';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <UserSearch />
      <hr />
      <UserForm />
    </div>
  );
}

export default App;

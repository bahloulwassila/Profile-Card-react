import React from 'react';
import Card from './components/Card';
import './style.css';

export default function App() {
  let user = 'Wassila BAHLOUL';
  let age = '20';
  return (
    <div>
      <Card user={user} age={age} />
    </div>
  );
}

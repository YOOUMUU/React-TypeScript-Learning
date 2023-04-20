import ListGroup from './components/ListGroup/index';
import Button from './components/Button/Button';
import Like from './components/Like/Like';
import './App.css';
import { CiAirportSign1 } from 'react-icons/ci';
import { useState } from 'react';

function App() {
  return <Like size={60} onCheck={() => console.log('checked')} />;
}

export default App;

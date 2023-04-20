import ListGroup from './components/ListGroup/index';
import Button from './components/Button/Button';
import Like from './components/Like/Like';
import './App.css';
import { CiAirportSign1 } from 'react-icons/ci';
import { useState } from 'react';

function App() {
  const [isLike, setIsLike] = useState(false);

  return <Like size={60} isLike={isLike} onCheck={() => setIsLike(!isLike)} />;
}

export default App;

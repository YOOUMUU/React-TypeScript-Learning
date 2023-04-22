import ListGroup from './components/ListGroup/index';
import Button from './components/Button/Button';
import Like from './components/Like/Like';
import './App.css';
import { CiAirportSign1 } from 'react-icons/ci';
import { useState } from 'react';

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });

  const handleClick = () => {
    console.log(game.player.name);
    setGame({ ...game, player: { ...game.player, name: 'Bob' } });
  };

  return <Button onClick={handleClick}>Change Player Name</Button>;
}

export default App;

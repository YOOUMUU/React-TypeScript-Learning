import ListGroup from './components/ListGroup/index';
import Button from './components/Button/Button';
import Like from './components/Like/Like';
import './App.css';
import { CiAirportSign1 } from 'react-icons/ci';
import { useState } from 'react';
import { produce } from 'immer';

function App() {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Moshroom'],
  });

  const handleClick = () => {
    setPizza(
      produce((draft) => {
        draft.toppings.push('Cheese');
      })
    );
    console.log(pizza.toppings);
  };

  return <Button onClick={handleClick}>Change Player Name</Button>;
}

export default App;

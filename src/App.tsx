import ListGroup from './components/ListGroup/index';
import './App.css';

function App() {
  const items = ['New York', 'Tokyo', 'Beijing'];
  return (
    <>
      <ListGroup items={items} heading='List' onSelectItem={() => {}} />
    </>
  );
}

export default App;

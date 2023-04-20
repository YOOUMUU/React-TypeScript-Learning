import ListGroup from "./components/LIstGroup";

function App() {
  const cityItems = ["New York", "San Francisco", "Tokyo"];
  const fruitItems = ["Apple", "Banana", "Orange"];

  const hanleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={cityItems}
        heading="Cites"
        onSelectItem={hanleSelectItem}
      />
      <ListGroup
        items={fruitItems}
        heading="Cites"
        onSelectItem={hanleSelectItem}
      />
    </>
  );
}

export default App;

import { useState } from 'react';
import ExpenseList from './components/expense-tracker/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 20, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 20, category: 'Utilities' },
  ]);

  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) =>
        setExpenses(expenses.filter((expense) => expense.id !== id))
      }
    />
  );
}

export default App;

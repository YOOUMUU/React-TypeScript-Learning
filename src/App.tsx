import { useState } from 'react';
import ExpenseList from './components/expense-tracker/components/ExpenseList';
import ExpenseFilter from './components/expense-tracker/components/ExpenseFilter';
import ExpenseForm from './components/expense-tracker/components/ExpenseForm';

function App() {
  const [selectedCategory, setSelectCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 20, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 20, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 20, category: 'Groceries' },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;

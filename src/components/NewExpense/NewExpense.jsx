import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

export default function NewExpense({ addExpense }) {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  function handleAddClick() {
    setIsAddingExpense(true);
  }

  function handleCancelClick() {
    setIsAddingExpense(false);
  }

  return (
    <div className='new-expense'>
      {isAddingExpense ? (
        <ExpenseForm
          onAddExpense={addExpense}
          handleCancelClick={handleCancelClick}
        />
      ) : (
        <button onClick={handleAddClick}>Add Expense</button>
      )}
    </div>
  );
}

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense({ addExpense }) {
  return (
    <div className='new-expense'>
      <ExpenseForm onAddExpense={addExpense} />
    </div>
  );
}

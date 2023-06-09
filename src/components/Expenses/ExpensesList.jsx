import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

export default function ExpensesList({ expenses }) {
  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expenseItem={expense} />
      ))}
    </ul>
  );
}

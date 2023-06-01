import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

export default function Expenses({ expenses }) {
  return (
    <Card className='expenses'>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expenseItem={expense} />
      ))}
    </Card>
  );
}

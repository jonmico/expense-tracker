import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem({ expenseItem }) {
  const { date, title, amount } = expenseItem;

  return (
    <Card className='expense-item'>
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </Card>
  );
}

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';

export default function Expenses({ expenses }) {
  const [year, setYear] = useState('');

  function changeFilterYear(filterYear) {
    setYear(filterYear);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onYearChange={changeFilterYear} />
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expenseItem={expense} />
        ))}
      </Card>
    </div>
  );
}

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';

export default function Expenses({ expenses }) {
  const [year, setYear] = useState('2023');

  function changeFilterYear(filterYear) {
    setYear(filterYear);
  }

  const filteredExpenses = expenses.filter(
    ({ date }) => date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter filterYear={year} onYearChange={changeFilterYear} />
        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expenseItem={expense} />
        ))} */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expenseItem={expense} />
        ))}
      </Card>
    </div>
  );
}

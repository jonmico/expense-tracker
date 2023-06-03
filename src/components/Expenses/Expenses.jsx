import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

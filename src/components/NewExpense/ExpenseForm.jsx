import './ExpenseForm.css';
import { useState } from 'react';

export default function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  function handleFormDataChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddExpense(formData);
    setFormData({ title: '', amount: '', date: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={formData.title}
            name='title'
            id='title'
            onChange={handleFormDataChange}
            placeholder='Expense Title'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={formData.amount}
            name='amount'
            id='amount'
            onChange={handleFormDataChange}
            placeholder='0.00'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            value={formData.date}
            name='date'
            id='date'
            onChange={handleFormDataChange}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

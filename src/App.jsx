import { useState } from 'react';


import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: "Car Insurance", amount: 294.67, date: new Date(2020, 2, 19) },
  { id: 'e2', title: "Toilet Paper", amount: 20.97, date: new Date(2021, 3, 22) },
  { id: 'e3', title: "New Desk", amount: 354.27, date: new Date(2021, 4, 14) },
  { id: 'e4', title: "New Car", amount: 3850, date: new Date(2020, 5, 3) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // const newExpenses = [...expenses];
    // newExpenses.push(expense);
    // setExpenses(newExpenses);
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };




  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

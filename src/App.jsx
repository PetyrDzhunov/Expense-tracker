import { useState } from 'react';


import ExpensesFilter from "./components/Expenses/ExpenseFilter";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  // const expenses = [
  //   { id: 'e1', title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 19) },
  //   { id: 'e2', title: "Toilet Paper", amount: 20.97, date: new Date(2021, 3, 22) },
  //   { id: 'e3', title: "New Desk", amount: 354.27, date: new Date(2021, 4, 14) },
  //   { id: 'e4', title: "New Car", amount: 3850, date: new Date(2021, 5, 3) },
  // ];

  const [expenses, setExpenses] = useState([
    { id: 'e1', title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 19) },
    { id: 'e2', title: "Toilet Paper", amount: 20.97, date: new Date(2021, 3, 22) },
    { id: 'e3', title: "New Desk", amount: 354.27, date: new Date(2021, 4, 14) },
    { id: 'e4', title: "New Car", amount: 3850, date: new Date(2021, 5, 3) },
  ]);

  const addExpenseHandler = (expense) => {
    const newExpenses = [...expenses];
    newExpenses.push(expense);
    setExpenses(newExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesList items={expenses} />
    </div>
  );
}

export default App;

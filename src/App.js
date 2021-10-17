import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    const expenses = [
        {title:"Car Insurance" , amount: 294.67,date: new Date(2021,2,19)},
        {title:"Toilet Paper" , amount: 20.97,date : new Date(2021,3,22)},
        {title:"New Desk" , amount: 354.27,date : new Date(2021,4,14)},
        {title:"New Car" , amount: 3850,date : new Date(2021,5,3)},
        {title:"New Laptop" , amount: 1250,date : new Date(2021,6,8)},
        {title:"Food expense" , amount: 200,date : new Date(2021,7,30)},
    ];
  return (
    <div>
    <NewExpense />
      <ExpensesList items={expenses} />
    </div>
  );
}

export default App;

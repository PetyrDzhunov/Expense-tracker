import ExpenseItem from "./components/ExpenseItem";

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
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
        <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date}/>
        <ExpenseItem title={expenses[5].title} amount={expenses[5].amount} date={expenses[5].date}/>
    </div>
  );
}

export default App;

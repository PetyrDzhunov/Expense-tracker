import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
import { Component } from 'react';
import Card from './Card';
export default function ExpensesList({items}) {
	console.log(ExpenseItem);
	return (
		<Card className="expenses">
			<ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date}/>
			<ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date}/> 
			<ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date}/>
			<ExpenseItem title={items[3].title} amount={items[3].amount} date={items[3].date}/>
			<ExpenseItem title={items[4].title} amount={items[4].amount} date={items[4].date}/>
			<ExpenseItem title={items[5].title} amount={items[5].amount} date={items[5].date}/> 
		</Card>
	)
}

// {[items]} => {[]} => destructuring => recieves directly array from the main App.js directory which we passed in our ExpenseList Component
// as an attribute and we catch it here with props : (items). Then we pass title,amount and date attributes into the expenseItem component
// which he resolves them by himself. Passing around data is the point of using props. Then in the date we pass the date props to the expenseDate component

import './Expenses.css';
import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';


export default function Expenses({ items, }) {
	const [filteredYear, setFilteredYear] = useState('2020');
	const filterChangedHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});



	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

// {[items]} => {[]} => destructuring => recieves directly array from the main App.js directory which we passed in our ExpenseList comp
// as an attribute and we catch it here with props : (items). Then we pass title,amount and date attributes into the expenseItem component
// which he recieves as a props . Passing around data is the point of using props. Then in the date we pass the date props to the expenseDate component which 
// he recieves as a props and work with it however needed.



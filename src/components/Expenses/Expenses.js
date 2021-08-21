import { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
const [selectedYear, setSelectedYear] = useState('');

  const handleSelectedYear = (year) => {
    console.log(year);
    setSelectedYear(year);
    console.log(selectedYear);
  }

  return (
    <div className="expenses">
      <ExpensesFilter onSelectedYear={handleSelectedYear}/>
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default Expenses;

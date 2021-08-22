import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const handleSelectedYear = (year) => setSelectedYear(year);

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onSelectedYear={handleSelectedYear}
      />
      {filteredExpenses.map((expense) => (
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

import "./ExpenseDate.css";

function ExpenseDate(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("default", { month: "long" });
  const date = props.date.getDate();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{date}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const submitExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(newExpense);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpense={submitExpenseHandler} />
    </div>
  );
};

export default NewExpense;

import ExpenseItem from "./ExpenseItem.js";
import "./ExpenseList.css";

const ExpensesList = ({ expenses }) => {
  if (!expenses.length) {
    return (
      <p className="expenses-list__fallback">You were great at saving money.</p>
    );
  }

  return (
    <ul className="expenses-list">
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;

import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [formData, setFormData] = useState({ title: "", amount: "", date: "" });
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");
  const titleChangeHandler = e => {
    setFormData(prev => {
      return { ...prev, title: e.target.value };
    });
  };
  const amountChangeHandler = e => {
    setFormData(prev => {
      return { ...prev, amount: e.target.value };
    });
  };
  const dateChangeHandler = e => {
    setFormData(prev => {
      return { ...prev, date: e.target.value };
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    onSaveExpenseData(formData);
    setFormData({ title: "", amount: "", date: "" });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={formData.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={formData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={formData.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

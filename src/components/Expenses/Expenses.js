import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterYearChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filtered = expenses.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterYearChangeHandler}
        />
        <ExpensesChart expenses={filtered} />
        <ExpenseList expenses={filtered} />
      </Card>
    </div>
  );
};

export default Expenses;

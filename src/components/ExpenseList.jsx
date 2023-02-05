import React, { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
// import { App} from '../context/';
import { Appcontext } from "../context/Appcontext";

const ExpenseList = () => {
  const { expenses } = useContext(Appcontext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);
  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);
  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setFilteredExpenses(searchResults);
  };

  return (
    <>
      <input
        type="text"
        className="form-control mb-3 mt-3"
        placeholder="Search Your Expenses"
        onChange={handleChange}
      />

      <ul className="list-group">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
          key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;

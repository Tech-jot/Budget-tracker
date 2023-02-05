import React, { useState, useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = (props) => {
  const { dispatch } = useContext(Appcontext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setName('');
    setCost('');
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            value={name}
            type="text"
            className="form-control"
            id="name"
            onChange={(event) => setName(event.target.value)}

          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost"> Cost</label>
          <input
            type="text"
            value={cost}
            required="required"
            className="form-control"
            id="cost"
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <button
            type="submit"
            className="btn-btn-primary"
          >
           
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;

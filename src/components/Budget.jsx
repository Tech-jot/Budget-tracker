import React, { useContext, useState } from "react";
import { Appcontext } from "../context/Appcontext";
import  EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";
const Budget = () => {
  const { budget, dispatch } = useContext(Appcontext);
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };
  return (
    <div className="alert alert-secondary p-3 d-flex align-item-center justify-content-between">
      {isEditing ? 
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
       : 
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      }
    </div>
  );
};

export default Budget;

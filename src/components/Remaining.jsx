import React,{ useContext} from 'react';
import { Appcontext } from '../context/Appcontext'

const Remaining = () => {
  const { expenses,  budget}= useContext( Appcontext);
  const totalExpenses = expenses.reduce((total, item )=>{
    return ( total= total + item.cost);
  },0);

  const alertType= totalExpenses ? 'alert-danger': 'alert-success'
  return (
    <div>
        <div className={` alert ${alertType}`}>
        <span>  Remaining: ${ budget-totalExpenses} </span>
          
            
      
    </div>
    </div>
  )
}

export default Remaining;
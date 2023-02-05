import React,{ useContext} from 'react';
import { Appcontext} from '../context/Appcontext'

const ExpenseTotal = () => {
  const { expenses} =useContext(Appcontext);
  const totalExpenses= expenses.reduce((total,item)=> {
    return( total+= item.cost);
  },0)
  return (
    <div>
         <div className='alert alert-primary'>
        <span>  Spent so far: ${ totalExpenses }</span>
          
            
      
    </div>

    </div>
  )
}

export default ExpenseTotal;
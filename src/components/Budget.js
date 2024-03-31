
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const inputRegex = /^[0-9]*$/; // Regular expression to allow only numeric input
        const newValue = event.target.value;

        // Check if the input matches the pattern (only numeric)
        if (inputRegex.test(newValue)) {
            const parsedValue = parseInt(newValue);
            if (parsedValue <= 20000 ) {
                setNewBudget(parsedValue); // Update the state with the new numeric value
            } else {
                alert("Budget cannot exceed 20,000");
            }
        } else {
            alert("Please enter a valid number");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
{/* <input type="number" step="10" value={newBudget} max="20,000" onChange={handleBudgetChange}></input> */}
<input 
    type="number" 
    step="10" 
    value={parseInt(newBudget)} 
    max={20000} 
    onChange={handleBudgetChange} 
/>

</div>
    );
};
export default Budget; 
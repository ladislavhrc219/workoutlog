import React from 'react';
import './../styles/createWorkout.css';

const createWorkout = ({onCreateWorkout}) => {
    const onSubmitHandler = event => {
        event.preventDefault();

        const {name, reps, date} = event.target.elements; 

        // console.log(event.target.elements.reps);
        if(name.value && reps.value && date.value) {
        onCreateWorkout(name.value, reps.value, date.value);
        }
    }

    return (

      
           <form onSubmit={onSubmitHandler} className="createWorkout-inputs">
           <input type="text" placeholder="Type" name="name"/> 
           <input type="number" placeholder="Reps" name="reps"/> 
            <input type="date" name="date"/>
            <button className="saveitButton"> Save it </button>
            </form>
      
    )
}

export default createWorkout;
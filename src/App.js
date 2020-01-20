import React, {useState} from 'react';
import './App.css';
import Header from './components/header.jsx';
import Navbar from './components/Navbar.jsx';
import WorkoutList from './workoutList/workoutList.jsx';
import WorkoutItem from './workoutList/workoutItem.jsx';
import CreateWorkout from './createWorkoutBlock/createWorkout.jsx';
// import createWorkout from './createWorkoutBlock/createWorkout.jsx';
import {ID} from './helpers/id.js';

const App = () => {

  const [exercises, setExercises] = useState([]);

  const createSession = (name, reps, date) => {
    const newWKTSession = {id: ID(), name, reps, date};
    const newState = [...exercises];


    newState.push(newWKTSession);
    setExercises(newState);
  }

  return (
    
      <div className="App">
       
        <Navbar />
          <Header />
          <CreateWorkout onCreateWorkout={createSession} />
          <WorkoutList>
            {exercises.map(({id, name, reps, date}) => (
                <WorkoutItem key={id}
            name={name} 
            reps={reps} 
            date={date}  
            />
              ))}
          </WorkoutList>

          
        
        
      </div>
    
  );
}

export default App;

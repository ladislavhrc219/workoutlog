
import React from 'react';
// import './../styles/medium.css';

// export default class Medium extends React.Component {
//     render () {
//     return (
//             <div className="medium">
//                 <p> Home </p>
               
//                 <p> Previous Workouts </p>
                
//             </div>
       
//     );
//   }
// }

import { Nav, NavLink } from 'reactstrap';

const Navbar = (props) => {
  return (
    <>
     <hr />
    <div >
        <h1 style={{ backgroundcolor: 'yellow', color: 'rgb(20, 194, 107)'}}> Strong Workout Tracker Exercise Log </h1>
     
      {/* <hr /> */}
      
      <Nav>
        <NavLink style={{  fontWeight: "bold", color: 'black', textDecoration: 'none'}} href="#">New Workout </NavLink> • <NavLink style={{ fontWeight: "bold", color: 'black', textDecoration: 'none'}} href="#">History</NavLink> • <NavLink style={{ fontWeight: "bold", color: 'black', textDecoration: 'none'}} href="#">Personal Records</NavLink> • <NavLink style={{ fontWeight: "bold", color: 'black', textDecoration: 'none'}} href="#">Settings</NavLink>
      </Nav>
      <hr />
      <Nav   >
        <NavLink style={{color: 'rgb(20, 194, 107)', textDecoration: 'none'}} href="#">Chest Exercises  </NavLink> • <NavLink style={{color: 'rgb(20, 194, 107)', textDecoration: 'none'}}  href="#">Back Exercises </NavLink> • <NavLink style={{color: 'rgb(20, 194, 107)', textDecoration: 'none'}}  href="#">Leg Exercises </NavLink> • <NavLink style={{color: 'rgb(20, 194, 107)', textDecoration: 'none'}}  href="#">Cardio & HIIT</NavLink>
      </Nav>
    </div>
    </>
  );
}

export default Navbar;
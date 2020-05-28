import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from 'react-router-dom';

// export default props => {
//   return (
//     <Menu>
//       <button className="side-button" onClick={()=>props.click(1)}>
//         Dashboard
//       </button>

//       <button className="side-button" onClick={()=>props.click(2)}>
//         Add Employee
//       </button>

//       <button className="side-button" onClick={()=>props.click(3)}>
//         List Employee
//       </button>

//     </Menu>
//   );
// };


export default props => {
  return (
    <Menu>
      <Link to="/" className="side-button">Home</Link>
      <Link to="/Dashboard" className="side-button"> Dashboard</Link>
      <Link to="/Add" className="side-button">Add Employee</Link>
      <Link to="/List" className="side-button">List Employee</Link>
         
    </Menu>
  );
};
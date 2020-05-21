import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <button className="side-button" onClick={()=>props.click(1)}>
        Dashboard
      </button>

      <button className="side-button" onClick={()=>props.click(2)}>
        Add Employee
      </button>

      <button className="side-button" onClick={()=>props.click(3)}>
        List Employee
      </button>

    </Menu>
  );
};
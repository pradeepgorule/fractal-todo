import React from "react";

export default props => (
  <div className="mt-4 br-4" style={{ display: "flex", justifyContent: "center" }}>
    <li
    className="list  col-md-4 "
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
        listStyle:"none",
        
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
      
    </li>
    <button onClick={props.onDelete} className="x-btn">x</button>
  </div>
);

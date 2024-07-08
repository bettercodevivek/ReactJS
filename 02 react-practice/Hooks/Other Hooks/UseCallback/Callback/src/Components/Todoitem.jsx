import React from "react";

function TodoItem({todo,onToggle}){
    return(
         <>
         <li>
            <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo.id)}></input>
            
         </li>
         
         </>
    );
}

export default React.memo(TodoItem);
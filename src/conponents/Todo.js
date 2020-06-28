import React from 'react'


export default function Todo({todo, index,deleteTodo,changeTodo}) {

    
    
    return (
        <div className="todo">
            {todo.text}
            <div>

                <button onClick= {()=>{deleteTodo(index)}}>x</button>
                <button onClick= {()=>{changeTodo(index)}} >Edit</button>    
            </div>
      
        </div>
    )
  }



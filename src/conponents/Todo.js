import React from 'react'

export default function Todo({todo, index,deleteTodo}) {

    
    return (
        <div className="todo">
            {todo.text}
            <div>
                <button onClick= {()=> deleteTodo(index)} >x</button>
                <button onClick= {()=> changeToDo(index)} >x</button>
            </div>
        </div>
    )
  }



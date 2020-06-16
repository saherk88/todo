import React , {useState} from 'react';
import './App.css';
import Todo from './conponents/Todo'
import TodoForm from './conponents/TodoForm'
import {useRef} from 'react'




function App() {
 

  const [todos, setTodos] = useState([
    {
      text: 'Learn react'
    },
    {
      text: 'Create a todolist'
    },
    {
      text: 'Practice sport'
    }
  ]);
  const addTodo = text =>{
    const newTodos = [...todos, {text}];
      setTodos(newTodos);
    };
    
    const deleteTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index,1);
      setTodos(newTodos);
    }
    const inputRef = useRef()

    const changeTodo = (text) => {
      
      inputRef.current = [{text}]
      }
    
  return (
    
    <div className ="app">
        <div className="todo-list">
          <div className="task"> <p>Todo List</p> </div>
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo}
            deleteTodo={deleteTodo}
            changeTodo={changeTodo}
             />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
    </div>
  )

}

export default App;
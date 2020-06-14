import React , {useState} from 'react';
import Todo from './conponents/Todo'
import TodoForm from './conponents/TodoForm'
import './App.css';

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
    
  return (
    
    <div className ="app">
        <div className="todo-list">
          <div className="task"> <p>Tasks</p> </div>
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo}
            deleteTodo={deleteTodo} />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
    </div>
  )

}

export default App;
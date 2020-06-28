import React , {useState} from 'react';
import {useRef} from 'react'
import './App.css';
import Todo from './conponents/Todo'




function App() {
 
  const [value, setValue] = useState('');
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
    
    const changeTodo = (index, text) => {
      const select = todos.find((item,ind)=> ind === index)
      
      console.log (select)
      // setValue({value : todos.text})
     
      const todo = todos.filter((item,ind)=> ind !== index)
      inputRef.current.value= select.text
      setTodos([...todo,{text: value}])
      setValue('');

        }

      const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    };
    const inputRef = useRef()
    
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
          <form onSubmit={handleSubmit}>
                <input type="text" className="input"
                     onChange={e => setValue(e.target.value)}
                     placeholder="add todo ..." ref={inputRef}/>
            </form>
        </div>
    </div>
  )

}

export default App;
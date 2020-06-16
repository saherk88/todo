import React, { useState } from 'react'
import {useRef} from 'react'


function TodoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    };
    const inputRef = useRef()
    
    
    return (
            <form onSubmit={handleSubmit}>
                <input type="text" className="input" value={value}
                     onChange={e => setValue(e.target.value)}
                     placeholder="add todo ..." ref={inputRef} />
            </form>
    )
}

export default TodoForm

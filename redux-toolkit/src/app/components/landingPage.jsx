import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../features/todoSlice';
import { removeTodo } from '../features/todoSlice';

const LandingPage = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }

    return (
        <main>
            <form onSubmit={addTodoHandler}>
                <input type="text" placeholder='input todo..' value={input} onChange={(e) => setInput(e.target.value)} />
                <input type="submit" value='add' />
            </form>
            <div>
                {
                    <ul>
                        {todos.map((i) => (
                            <li key={i.id}>
                                {i.text}{" "}
                                <button style={{ backgroundColor: 'red',color:'white' }} onClick={() => dispatch(removeTodo(i.id))}>X</button>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </main>
    )
}

export default LandingPage
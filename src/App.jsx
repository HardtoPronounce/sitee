import TodoList from './components/TodoList'
import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    todoNameRef.current.value
  }

  return (
    <div className="App">
        <TodoList todos={todos} />
        <input ref={todoNameRef} type="text"/>
        <button onClick={handleAddTodo}>Add Todo</button>
        <button>Clear Complete</button>
        <div>0 left to do</div>
    </div>
  );
}

export default App;

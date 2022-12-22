import TodoList from './components/TodoList'
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
        <TodoList />
        <input type="text"/>
        <button>Add Todo</button>
        <button>Clear Complete</button>
        <div>0 left to do</div>
    </div>
  );
}

export default App;

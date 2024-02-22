import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { useState, useEffect } from 'react';

const TodosLogic = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  function getInitialTodos() {
    const tempItem = localStorage.getItem('todos');
    const savedTodos = JSON.parse(tempItem);
    return savedTodos || [];
  }

  const delTodo = (id) => {
    console.log('deleted', id);
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };
  return (
    <div>
      <InputTodo addTodo={addTodo} />
      <TodosList
        todos={todos}
        setTodos={setTodos}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default TodosLogic;

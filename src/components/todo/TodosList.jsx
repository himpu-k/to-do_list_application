import TodoItem from './TodoItem';

const TodosList = (props) => {
  return (
    <ul>
      {' '}
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodos={props.setTodos}
          delTodo={props.delTodo}
        />
      ))}{' '}
    </ul>
  );
};

export default TodosList;

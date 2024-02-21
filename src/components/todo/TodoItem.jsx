import styles from '../../styles/TodoItem.module.scss';

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleChange = (id) => {
    console.log('changed', id);
    props.setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => handleChange(props.todo.id)}
        />
        <button onClick={() => props.delTodo(props.todo.id)}>Delete</button>
        <span style={props.todo.completed ? completedStyle : null}>
          {props.todo.title}
        </span>
      </div>
    </li>
  );
};

export default TodoItem;

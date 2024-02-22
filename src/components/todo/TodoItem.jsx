import styles from '../../styles/TodoItem.module.scss';
import { useState, useRef } from 'react';
import { IoIosRemoveCircle } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const editInputRef = useRef(null);

  let viewmode = {};
  let editmode = {};

  if (editing) {
    viewmode.display = 'none';
  } else {
    editmode.display = 'none';
  }
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

  const handleEditing = () => {
    console.log('editing');
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      props.setUpdate(editInputRef.current.value, props.todo.id);
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewmode}>
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => handleChange(props.todo.id)}
        />
        <button onClick={() => handleEditing()}>
          <MdEdit size={20} color="#5e5e5e" />
        </button>
        <button onClick={() => props.delTodo(props.todo.id)}>
          <IoIosRemoveCircle size={20} color="#5e5e5e" />
        </button>
        <span style={props.todo.completed ? completedStyle : null}>
          {props.todo.title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editmode}
        ref={editInputRef}
        defaultValue={props.todo.title}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;

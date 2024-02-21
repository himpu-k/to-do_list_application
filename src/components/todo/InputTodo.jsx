import { useState } from 'react';

const InputTodo = (props) => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      console.log(input);
      props.addTodo(input);
      setInput('');
      setMessage('');
    } else {
      setMessage('Input field cannot be empty!');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          className="input-text"
        />
        <button type="submit" className="input-submit">
          Submit
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputTodo;

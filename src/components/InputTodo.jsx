import { useState } from 'react';
import PropTypes from 'prop-types';


const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim())
    {
      setMessage('Please add todo item');
      setTimeout(() => {
        setMessage('');
      }, 2000);
    } else {
      addTodoItem(title);
      setTitle('');
      setMessage(' ');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add todo..."
          value={title}
          onChange={handleChange}
        />
        <button className="input-submit">
          Submit
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;

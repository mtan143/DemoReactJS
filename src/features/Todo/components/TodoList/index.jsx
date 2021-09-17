import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classNames from "classnames";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;
    onTodoClick(todo, idx);
  };
  return (
    <div>
      <ul className="todoList">
        {todoList.map((todo, idx) => (
          <li
            className={classNames({
              todoItem: true,
              completed: todo.stt === "completed",
            })}
            key={todo.id}
            onClick={() => handleTodoClick(todo, idx)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

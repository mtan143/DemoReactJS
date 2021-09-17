import React, { useState } from "react";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Sleep",
      stt: "new",
    },
    {
      id: 2,
      title: "Studying",
      stt: "completed",
    },
    {
      id: 3,
      title: "Working",
      stt: "completed",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filtered, setFiltered] = useState("all");

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      stt: newTodoList[idx].stt === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
    console.log(todo, idx);
  };

  const handleAll = () => {
    setFiltered("all");
  };
  const handleCompleted = () => {
    setFiltered("completed");
  };
  const handleNew = () => {
    setFiltered("new");
  };

  const renderFilterList = todoList.filter(
    (todo) => filtered === "all" || filtered === todo.stt
  );
  return (
    <div>
      <p>Todo List</p>
      <TodoList todoList={renderFilterList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleAll}>Show All</button>
        <button onClick={handleCompleted}>Show Completed</button>
        <button onClick={handleNew}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;

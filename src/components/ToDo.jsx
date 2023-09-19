import { useState } from "react";
import "../assets/styles/toDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faFileCirclePlus,
  faPenToSquare,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import TaskList from "./TaskList";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (task.trim() != "") {
      setList([...list, task]);
      setTask("");
    }
  }

  function removeTask(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  function editTask(listItem, index) {
    setTask(listItem);
    list.splice(index, 1);
  }

  return (
    <>
      <div className="block-container">
        <div className="todo-container">
          <h1>To Do List</h1>
          <div className="input-container">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faFileCirclePlus}
              size="2xl"
              id="add"
              style={{ color: "#ffffff" }}
              onClick={addTask}
            />
          </div>
          <TaskList tasks={list} onEdit={editTask} onRemove={removeTask} />
        </div>
      </div>
    </>
  );
};

export default ToDo;

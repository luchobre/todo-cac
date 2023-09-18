import { useState } from "react";
import "../assets/styles/toDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    setList([...list, task]);
    setTask("");
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
          <ul className="list-container">
            {list.map((listItem, index) => (
              <li key={index} className="list-data">
                <input type="checkbox" name="" id="" />
                <p>{listItem.charAt(0).toUpperCase() + listItem.slice(1).toLowerCase()}</p>
                <div className="buttons-data">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    size="2xl"
                    style={{ color: "#ffffff" }}
                    id="edit"
                    onClick={() => editTask(listItem, index)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    size="2xl"
                    style={{ color: "#c91f13" }}
                    id="remove"
                    onClick={() => removeTask(index)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ToDo;

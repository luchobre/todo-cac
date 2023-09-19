import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/toDo.css";

const TaskItem = ({text, onEdit, onRemove}) => {
  return (
    <>
      <label className="mycheckbox">
        <input type="checkbox" name="" />
        <span>
          <i className="fas fa-check on">
            <FontAwesomeIcon icon={faCheck} />
          </i>
          <i className="fas fa-times off">
            <FontAwesomeIcon icon={faXmark} />
          </i>
        </span>
      </label>
      <p>
        {text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()}
      </p>
      <div className="buttons-data">
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="2xl"
          style={{ color: "#ffffff" }}
          id="edit"
          onClick={onEdit}
        />
        <FontAwesomeIcon
          icon={faTrash}
          size="2xl"
          style={{ color: "#c91f13" }}
          id="remove"
          onClick={onRemove}
        />
      </div>
    </>
  );
};

export default TaskItem;

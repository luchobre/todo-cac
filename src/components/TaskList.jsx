import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/toDo.css";
import TaskItem from "./TaskItem";

const TaskList = ({tasks,onEdit, onRemove}) => {
  return (
    <ul className="list-container">
    {tasks.map((task, index) => (
      <li key={index} className="list-data">
        <TaskItem 
            text={task}
            onEdit = {()=> onEdit(task, index)}
            onRemove = {()=> onRemove(index)}
        />
      </li>
    ))}
  </ul>
  )
}

export default TaskList
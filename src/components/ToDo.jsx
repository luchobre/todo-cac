import { useState } from 'react'; // Importa useState desde React para gestionar el estado
import '../assets/styles/toDo.css'; // Importa estilos CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesome para los iconos
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'; // Importa un icono específico

const ToDo = () => {
  const [task, setTask] = useState(''); // Estado para la tarea actual
  const [list, setList] = useState([]); // Estado para la lista de tareas

  // Función para agregar una tarea a la lista
  function addTask() {
    setList([...list, task]);
    setTask(''); // Limpia el campo de entrada después de agregar
  }

  // Función para eliminar una tarea de la lista
  function removeTask(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  // Función para editar una tarea
  function editTask(listItem, index) {
    setTask(listItem);
    list.splice(index, 1); // Elimina la tarea de la lista mientras se edita
  }

  return (
    <>
      <div className="block-container">
        <div className="todo-container">
          <h1>To Do List</h1> {/* Título de la lista de tareas */}
          <div className='input-container'>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <FontAwesomeIcon icon={faFileCirclePlus} style={{ color: "#ffffff", fontSize: '7em', marginTop: '50px' }} onClick={addTask} /> 
            {/* Icono FontAwesome para agregar tareas */}
          </div>
          <ul className="list-container">
            {/* Itera sobre la lista de tareas y muestra cada elemento */}
            {list.map((listItem, index) => (
              <li key={index} className='list-data'>
                <input type="checkbox" name="" id="" /> {/* Checkbox */}
                <p>{listItem}</p> {/* Muestra el texto de la tarea */}
                <div className="buttons-data">
                  <button id='edit' onClick={() => editTask(listItem, index)}>Editar</button> {/* Botón para editar tarea */}
                  <button id='remove' onClick={() => removeTask(index)}>Eliminar</button> {/* Botón para eliminar tarea */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ToDo; // Exporta el componente ToDo

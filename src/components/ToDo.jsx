import { useState } from 'react'
import '../assets/styles/toDo.css'

const ToDo = () => {
const [task, setTask] = useState('')
const [list, setList] = useState([])

function addTask () {
    setList([...list, task]);
    setTask('')
}

function removeTask (index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList)
}

function editTask (listItem) {
    console.log(listItem)
}

  return (
    <>
    <div className="block-container">
        <div className="todo-container">
            <h1>To Do List</h1>
                <div className='input-container'>
                    <input 
                    type="text" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)}
                    />
                    <button onClick={addTask}>+</button>
                </div>
            <ul className="list-container">
                {list.map((listItem, index) => (
                    <li key={index} className='list-data'>
                        <input type="checkbox" name="" id="" />
                        <p>{listItem}</p>
                        <div className="buttons-data">
                        <button id='edit' onClick={()=> editTask(listItem)}>Edit</button>
                        <button id='remove' onClick={() => removeTask(index)}>Remove</button>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </>
  )
}

export default ToDo
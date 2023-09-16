import { useState } from 'react'
import '../assets/styles/toDo.css'

const ToDo = () => {
const [task, setTask] = useState()

const handleTask = (e) => {
    setTask(e.target.value);
    console.log(task)
}




  return (
    <>
    <div className="block-container">
        <div className="todo-container">
            <h1>To Do List</h1>
            <form onSubmit={handleTask}>
                <div className='input-container'>
                    <input type="text" value={task} />
                    <button type='submit'>+</button>
                </div>
            </form>
            <ul className="list-container">
                <li className='list-data'>
                    <input type="checkbox" name="" id="" />
                    <p>{task}</p>
                    <div className="buttons-data">
                        <button id='edit'>Edit</button>
                        <button id='remove'>Remove</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default ToDo
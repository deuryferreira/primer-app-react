import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'

const TaskCard = ({ task }) => {

    const { deleteTask } = useContext(TaskContext)

    return (

        <div>
            <h2>{task.title}</h2>
            <h5>{task.description}</h5>
            <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
        </div>

    )
}

export default TaskCard;
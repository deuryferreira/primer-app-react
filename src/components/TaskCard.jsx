import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'

const TaskCard = ({ task }) => {

    const { deleteTask } = useContext(TaskContext)

    return (

        <div className='bg-gray-800 text-slate-100 p-4 rounded-md flex-col'>
            <h2 className='text-xl font-bold capitalize flex-row break-words'>{task.title}</h2>
            <h5 className='text-gray-500 text-sm flex-row break-words'>{task.description}</h5>
            <button className="bg-orange-600 px-2 py-1 rounded-md mt-4 hover:bg-orange-400" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
        </div>

    )
}

export default TaskCard;
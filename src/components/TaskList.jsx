//modules
import { useContext } from 'react'
import TaskCard from './TaskCard.jsx'
import { TaskContext } from '../context/TaskContext.jsx'


const TaskList = () => {

        const { tasks } = useContext(TaskContext);


        if (tasks.length === 0) {
                return <h1>No hay tareas aun</h1>
        }
        console.log(tasks)
        return (
                <div>
                        {tasks.map((task) => (<TaskCard key={task.id} task={task} />))}
                </div>
        )
}




export default TaskList;
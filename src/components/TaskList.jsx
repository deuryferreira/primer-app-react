//modules
import TaskCard from './TaskCard.jsx'


const TaskList = ({tasks, deleteTask})=>{
        

        if (tasks.length ===0){
                return <h1>No hay tareas aun</h1>
        }
console.log(tasks)
return(
        <div>
                {tasks.map((task)=>(<TaskCard key={task.id} task={task} deleteTask={deleteTask}/>))}
        </div>
)
}




export default TaskList;
//modules
import TaskCard from './TaskCard.jsx'


const TaskList = ({tasks})=>{
        

        if (tasks.length ===0){
                return <h1>No hay tareas aun</h1>
        }
console.log(tasks)
return(
        <div>
                {tasks.map((task)=>(<TaskCard key={task.id} task={task}/>))}
        </div>
)
}




export default TaskList;
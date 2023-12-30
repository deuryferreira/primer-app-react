//modules



const TaskList = ({tasks})=>{
        

        if (tasks.length ===0){
                return <h1>No hay tareas aun</h1>
        }

return(
        <div>
                {tasks.map((task)=><div key={task.id}>
                        <h2>{task.title}</h2>
                        <h5>{task.description}</h5>
                </div>)}
        </div>
)
}




export default TaskList;
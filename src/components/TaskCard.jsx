

const TaskCard = ({ task, deleteTask }) => {


    return (

        <div>
            <h2>{task.title}</h2>
            <h5>{task.description}</h5>
            <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
        </div>

    )
}

export default TaskCard;
import { useState, useContext } from "react";
import { TaskContext } from '../context/TaskContext'



const TaskForm = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)



    const handleSubmit = (e) => {
        e.preventDefault();


        //crear la tarea
        createTask({
            title,
            description
        });



        //reset form
        setTitle("")
        setDescription("")
    }
    return (<form onSubmit={handleSubmit}>
        <h3>Agregar Nueva Tarea</h3>
        <input type="text" placeholder="Escribe tu tarea" onChange={e => setTitle(e.target.value)} value={title} autoFocus />

        <textarea name="" id="" placeholder="Describe tu tarea" cols="20" rows="5" onChange={c => setDescription(c.target.value)} value={description}></textarea>

        <button>Agregar</button>
    </form>)
}




export default TaskForm;
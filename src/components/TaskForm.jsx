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
    return (
        <div className="max-w-md mx-auto rounded-md">
            <form className="bg-slate-800 p-10 mb-4 rounded-md" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-white mb-3">Lista de tareas</h1>
                <input className="bg-slate-200 p-3 w-full mb-2" type="text" placeholder="Escribe tu tarea" onChange={e => setTitle(e.target.value)} value={title} autoFocus />

                <textarea className="bg-slate-200 p-3 w-full mb-2" name="" id="" placeholder="Describe tu tarea" cols="10" rows="4" onChange={c => setDescription(c.target.value)} value={description}></textarea>

                <button className="bg-blue-500 hover:bg-blue-400 px-3 py-2 w-full rounded-md text-white text-xl">Agregar</button>
            </form>
        </div>
    )
}




export default TaskForm;
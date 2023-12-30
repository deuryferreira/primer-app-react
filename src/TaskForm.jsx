import { useState } from "react";



const TaskForm =({createTask})=>{

    const [title, setTitle] = useState("")

    const handleSubmit= (e)=>{
        e.preventDefault();
      
        createTask(title);
    }
return (<form onSubmit={handleSubmit}>
    <h3>Agregar Nueva Tarea</h3>
    <input type="text" placeholder="Escribe tu tarea" onChange={e=>setTitle(e.target.value)}/>
    <button>Agregar</button>
</form>)
}




export default TaskForm;
import { createContext, useState, useEffect } from 'react'
import { tasks as data } from "../data/tasks" //tasklist source


export const TaskContext = createContext()



export function TaskContextProvider(props) {


    const [tasks, setTasks] = useState([])

    useEffect(() => { setTasks(data) }, [])


    //Crear Tareas
    const createTask = (task) => {
        setTasks([...tasks, {
            id: tasks.length,
            title: task.title,
            description: task.description
        }])
    }

    //Borrar tareas
    const deleteTask = (taskID) => {
        setTasks(tasks.filter(task => task.id !== taskID));
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}


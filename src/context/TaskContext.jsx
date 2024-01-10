import { createContext } from 'react'

export const TaskContext = createContext()



export function TaskContextProvider(props) {


    const [tasks, setTasks] = useState([])

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
        <TaskContext.Provider value={x}>
            {props.children}
        </TaskContext.Provider>
    )
}


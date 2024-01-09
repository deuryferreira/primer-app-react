import { tasks as data } from "./data/tasks.js" //tasklist source
import { useState, useEffect } from 'react'

import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'


//app
const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => { setTasks(data) }, [])


  //create task
  const createTask = (task) => {
    setTasks([...tasks, {
      id: tasks.length,
      title: task.title,
      description: task.description
    }])
  }

  const deleteTask = (taskID) => {
    setTasks(tasks.filter(task => task.id !== taskID));
  }


  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}
//asd
export default App;

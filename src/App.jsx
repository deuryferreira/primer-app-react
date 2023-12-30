import {tasks as data} from "./tasks.js" //tasklist source
import {useState, useEffect} from 'react'

import TaskList from './TaskList.jsx'
import TaskForm from './TaskForm.jsx'


//app
const App = ()=>{
  const [tasks, setTasks] = useState([])

  useEffect(()=>{setTasks(data)},[])


  //create task
  const createTask=(taskTitle)=>{
setTasks([...tasks,{
  id: tasks.length,
  title:taskTitle,
  description:"algo nuevo"
}])
  }

  return(
  <div>
    <TaskForm createTask={createTask}/>
    <TaskList tasks={tasks}/>
  </div>
  )
}

export default App

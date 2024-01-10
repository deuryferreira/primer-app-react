import { tasks as data } from "./data/tasks.js" //tasklist source
import { useState, useEffect } from 'react'

import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'


//app
const App = () => {

  useEffect(() => { setTasks(data) }, [])


  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}
//
export default App;



import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'


//app
const App = () => {



  return (
    <main className='min-h-screen h-auto bg-zinc-900'>
      <div className='container h-auto mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}
//
export default App;

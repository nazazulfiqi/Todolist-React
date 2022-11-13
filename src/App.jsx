import './App.css'
import ShowTodo from './components/ShowTodo'
import Todolist from './components/Todolist'

function App() {
 return(
  <div className='App'>
    <h3 className='fw-bold mt-5 mb-3'>What's the plan for today?  </h3>
  <Todolist/>
  <ShowTodo/>
  </div>
  )
}

export default App

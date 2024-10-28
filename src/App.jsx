import './App.css'
import './bootstrap.min.css'
import Home from './Home/Home'
import Edit from './Home/Edit'
import Add from './Home/Add'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>

    </Routes>
    </>
  )
}

export default App

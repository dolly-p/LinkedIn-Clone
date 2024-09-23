import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/home' element={<div>
              <Header/>
              <Home />
              </div>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App

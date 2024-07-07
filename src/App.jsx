import React from 'react'
import "./global.css"
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Header from './components/Header'
const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/home' element={<Home/> } />
          <Route path='/about' element={<About/> } />
        </Routes>
      </Router>

    </>
  )
}

export default App
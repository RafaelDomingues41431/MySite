import './App.css'
import Header from './Header.js'
import About from './About.js'
import Projects from './Projects.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/MySite/' element={<About />} />
          <Route path='/MySite/projects' element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

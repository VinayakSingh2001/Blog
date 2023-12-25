import { useState } from 'react'
import { Homepage, BlogContentPage } from './pages'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog/:id' element={<BlogContentPage />}/>
      </Routes>
      
      
    </div>

  )
}

export default App

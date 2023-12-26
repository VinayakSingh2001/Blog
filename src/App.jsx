import { useState } from 'react'
import { Homepage, BlogContentPage } from './pages'
import { Routes, Route } from 'react-router-dom'
import useFetch from './Hooks/useFetch'

function App() {
  const [count, setCount] = useState(0)

  let { loading, error, data } = useFetch('http://localhost:1337/api/blogs?populate=*')
  if (loading) return <p>loading...</p>
  if (error) return <p>Error!</p>
  console.log(data);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog/:id' element={<BlogContentPage />} />
      </Routes>


    </div>

  )
}

export default App

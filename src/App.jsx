import { Homepage, BlogContentPage } from './pages'
import { Routes, Route } from 'react-router-dom'
import useFetch from './Hooks/useFetch'

function App() {

  let { loading, error, data } = useFetch('http://localhost:1337/api/blogs?populate=*')
  if (loading) return <p>loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage blogs={data?data:""} />} />
        <Route path='/blog/:id' element={<BlogContentPage />} />
      </Routes>


    </div>

  )
}

export default App

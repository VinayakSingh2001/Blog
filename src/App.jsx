import { useState } from 'react'
import { Navbar, Blogs, Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Blogs />
      <Footer />
    </div>

  )
}

export default App

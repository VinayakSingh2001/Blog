import { useState } from 'react'
import { Homepage, BlogContentPage } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Homepage /> */}
      <BlogContentPage />
    </div>

  )
}

export default App

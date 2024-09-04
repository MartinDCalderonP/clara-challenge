import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/auth/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

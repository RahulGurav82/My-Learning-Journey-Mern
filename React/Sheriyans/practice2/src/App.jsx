import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from '../components/Header'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

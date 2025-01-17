import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from '../components/Header'
import { useContext } from 'react'
import { DataContext } from './context/userContext'

function App() {
  const data = useContext(DataContext);

  return (
    <>
    <Header />
    <h1>{data}</h1>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

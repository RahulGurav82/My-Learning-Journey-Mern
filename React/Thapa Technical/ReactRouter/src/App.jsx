import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import Home from "./pages/Home"
import About from "./pages/About"
import Movie from "./pages/Movie"
import Contact from "./pages/Contact"
import AppLayout from './components/layouts/AppLayout'
import ErrorPage from './pages/ErrorPage'
import GetApiData from './api/GetApiData'
import MovieCard from './components/UI/MovieCard'
import {GetFormData} from './pages/Contact'

const App = () => {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout />,
      errorElement : <ErrorPage />,
      children : [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "/about",
          element : <About />
        },
        {
          path : "/movie",
          element : <Movie />,
          loader: GetApiData,
        },
        {
          path : "/movie/:movieID",
          element : <MovieCard />,
          loader: GetApiData
        },
        {
          path : "/contact",
          element : <Contact />,
          action : GetFormData,
        },
      ]
    }
  ])
  return <RouterProvider router={router} /> ;
}

export default App



import Container from 'react-bootstrap/Container'
import Header from './Components/Header'
import Body from './Components/Body'
import { Login } from './pages/LoginPage'
import { Logout } from './pages/Logout'
import { Register } from './pages/RegisterPage'
import { Home } from './pages/LandingPage'
import { SongsPage } from './pages/SongsPage'
import { Setlists } from './pages/Setlists'
import { About } from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
    {
      path: "/songspage",
      element: <SongsPage></SongsPage>
    },
    {
      path: "/setlists",
      element: <Setlists></Setlists>
    },
    {
      path: "/about",
      element: <About></About>
    },
    {
      path: "/logout",
      element: <Logout></Logout>
    }

  ])
  return (
    <Container fluid className='app'>
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </Container>
  )

}

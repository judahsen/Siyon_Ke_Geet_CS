import Container from 'react-bootstrap/Container'
import Header from './Components/Header'
import Body from './Components/Body'
import { LoginPage } from './pages/LoginPage'
import { Logout } from './Components/Logout'
import { RegisterPage } from './pages/RegisterPage'
import { Home } from './pages/LandingPage'
import { SongsPage } from './pages/SongsPage'
import { Setlists } from './Components/Setlists'
import { About } from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import { Protected } from './Components/Protected'



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/login",
      element: <LoginPage></LoginPage>
    },
    {
      path: "/register",
      element: <RegisterPage></RegisterPage>
    },
    {
      path: "/songspage",
      element: <SongsPage></SongsPage>
    },
    {
      path: "/setlists",
      element: <Protected><Setlists></Setlists></Protected>
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
      <AuthContext>
      <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </Container>
  )

}

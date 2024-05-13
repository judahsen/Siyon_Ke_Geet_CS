import Container from 'react-bootstrap/Container'
import Header from './Components/Header'
import { LoginPage } from './pages/LoginPage'
import { Logout } from './Components/Logout'
import { RegisterPage } from './pages/RegisterPage'
import { Home } from './pages/LandingPage'
import PlaylistManagerPage from './pages/Playlist'
import { About } from './pages/About'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { AuthContext } from './Context/AuthContext'
// import { Protected } from './Components/Protected'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthProvider'
import LyricsPage from './pages/Lyrics';
import AudioPlayerPage from './pages/MediaPlayer';
import SongDetails from './Components/SongsDetail'




// export default function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home></Home>
//     },
//     {
//       path: "/login",
//       element: <LoginPage></LoginPage>
//     },
//     {
//       path: "/register",
//       element: <RegisterPage></RegisterPage>
//     },
//     {
//       path: "/songspage",
//       element: <SongsPage></SongsPage>
//     },
//     {
//       path: "/setlists",
//       element: <PlaylistManagerPage></PlaylistManagerPage>
//     },
//     {
//       path: "/about",
//       element: <About></About>
//     },
//     {
//       path: "/logout",
//       element: <Logout></Logout>
//     }

//   ])
//   return (
//     <Container fluid className='app'>
//       <Header />
//       <AuthContext>
//       <RouterProvider router={router}></RouterProvider>
//       </AuthContext>
//     </Container>
//   )

// }
export default function App() {
  return (
    <Container fluid className='app'>
    <Header />
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/songresults" element={<SongDetails />} />
          <Route path="/audio/:trackId" element={<AudioPlayerPage />} />
          <Route path="/setlists" element={<PlaylistManagerPage />} />
        </Routes>
      </Router>
    </AuthProvider>
    </Container>
  );
}



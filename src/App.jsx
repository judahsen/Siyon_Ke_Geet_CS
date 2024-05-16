import Container from 'react-bootstrap/Container'
import Header from './Components/Header'
import PlaylistManagerPage from './pages/Playlist'
import { LoginPage } from './pages/LoginPage'
import { Logout } from './Components/Logout'
import { RegisterPage } from './pages/RegisterPage'
import { Home } from './pages/LandingPage'
import { About } from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthProvider'







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
          <Route path="/setlists" element={<PlaylistManagerPage />} />
        </Routes>
      </Router>
    </AuthProvider>
    </Container>
  );
}



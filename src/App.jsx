import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Container from 'react-bootstrap/Container'
import Header from './Components/Header'



export default function App() {

  return (
    <Container fluid className='app'>
      <Header />
    </Container>
  )

}

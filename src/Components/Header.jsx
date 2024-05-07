import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
            <Container>
                <Navbar.Brand href="#home"><img src="C:\Users\sardi\Documents\coding_temple\PW_141\Siyon_Ke_Geet\Siyon ke geet\src\assets\Siyon ke geet logo.svg" alt="" srcset="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Songs</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


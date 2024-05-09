import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export function SongIndex() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

// import Nav from 'react-bootstrap/Nav';

// function ListExample() {
//   return (
//     <Nav defaultActiveKey="/home" as="ul">
//       <Nav.Item as="li">
//         <Nav.Link href="/home">Active</Nav.Link>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <Nav.Link eventKey="link-1">Link</Nav.Link>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <Nav.Link eventKey="link-2">Link</Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default ListExample;
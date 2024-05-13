import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container,Row } from 'react-bootstrap';

function SongDetails() {

  return (
    <Container>
      <Row className="mx-2 row row-cols-4">
        <Card>
          <Card.Img src='#' />
          <Card.Body>
            <Card.Title>Album Name</Card.Title>
          </Card.Body>
        </Card>
        
      </Row>
    </Container>

  );
}

export default SongDetails;

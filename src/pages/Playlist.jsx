
import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import axios from 'axios';
import { Container, Card, Row, Button, FormControl } from 'react-bootstrap';



function PlaylistManagerPage() {


  return (
    <Container>
      <h1>This is the playlist page</h1>
      <Row className="mx-2 row row-cols-4">
        <Card style={{ padding: '25px' }}>
          <Card.Img src='' />
          <Card.Body>
            <Card.Title>Album Name</Card.Title>
            <Card.Subtitle>Release Date :</Card.Subtitle>
            <Card.Subtitle>Album Has  tracks</Card.Subtitle>
          </Card.Body>
          <Button style={{ margin: '10px' }}>Delete from Playlist</Button>
        </Card>
      </Row>
    </Container>
  )


}
export default PlaylistManagerPage;
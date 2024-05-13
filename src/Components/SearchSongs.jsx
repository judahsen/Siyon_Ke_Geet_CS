import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import { CLIENT_Secret, CLIENT_ID } from '../spotifysecrets';
import { Card, Row } from 'react-bootstrap';


function SearchBar() {

  const [accessToken, setAccessToken] = useState("")
  const [albums, setAlbums] = useState([]);



  useEffect(() => {
    //API Access Token
    var authParameters = {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_Secret
    }

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])


  const [searchInput, setSearchInput] = useState('');



  async function search() {
    console.log("Search for " + searchInput); //taylor Swift


    // Get request using search to get the Artist ID
    var searchParameters = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken

      }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      .then(response => response.json())
      .then(data => { return data.artists.items[0].id })

    console.log("Artist ID is " + artistID);
    // Get request with Artist ID grab all the albums from that artist
    var returnedAlbums = await fetch("https://api.spotify.com/v1/artists/" + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
      .then(response => response.json())
      .then(data => { 
        console.log(data);
        setAlbums(data.items)
      })
    // Display those albums to the user

  }


  console.log(albums);
  return (
    <div>
      <Container>
        <InputGroup className='mb-3' size="lg">
          <FormControl
            placeholder='Search For Artist'
            type='input'
            onKeyDown={event => {
              if (event.key == "Enter") {
                search();
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      <Container>

        <Container>
          <Row className="mx-2 row row-cols-4">
            {albums.map((album, i) => {
              console.log(album);
              return (
                <Card>
              <Card.Img src={album.images[0].url} />
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                <Card.Subtitle>Release Date : {album.release_date}</Card.Subtitle>
                <Card.Subtitle>Album Has {album.total_tracks} tracks</Card.Subtitle>
              </Card.Body>
            </Card>
              )
            })}
            

          </Row>
        </Container>


      </Container>
    </div>
  );
}

export default SearchBar;


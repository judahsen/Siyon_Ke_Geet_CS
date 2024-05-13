import { Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import SearchBar from "../Components/SearchSongs";
import { CLIENT_Secret,CLIENT_ID } from "../spotifysecrets";




export function Home() {
    
    const [accessToken, setAccessToken] = useState("")



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

    
    return (
        <Container>
            <h1>This is a Digital Song book WebApp</h1>
            <h2>A website aimed towards creating a musician's tool</h2>
            <h2>having the basic functionality to read Lyrics and possibly chords/tabs,(Using Dummy Data For Now)</h2>
            <h2>quickly refer to the tune of a part of a song </h2>
            <h2>And create setlists for quick access to song Data as needed</h2>
            <Routes>
                <Route path="/" element={<SearchBar />} />
                
            </Routes>
            
        </Container>

    )
}


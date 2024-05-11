import { Container } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import SearchBar from "../Components/SearchSongs";
import SongList from "../Components/SongIndex";
import SongDetails from "../Components/SongsDetail";





export function Home() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    const handleSearch = async () => {
        const response = await axios.get(`/api/search`, { params: { query } });
        setSearchResults(response.data.tracks);
    };
    return (
        <Container>
            <h1>This is a Digital Song book WebApp</h1>
            <h2>A website aimed towards creating a musician's tool</h2>
            <h2>having the basic functionality to read Lyrics and possibly chords/tabs,</h2>
            <h2>quickly refer to the tune of a part of a song if you feel like you are forgetting something,</h2>
            <h2>And create setlists for quick access to song Data as needed</h2>
            <Routes>
                <Route path="/" element={<SearchBar />} />
                <Route path="/songs" element={<SongList />} />
                <Route path="/songs/:id" element={<SongDetails />} />
            </Routes>
            
        </Container>

    )
}


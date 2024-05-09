import { Container } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




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
            <div>
                <h1>Search for Songs</h1>
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleSearch}>Search</button>

                {searchResults && (
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id}>
                                <p>{result.name} by {result.artists}</p>
                                <Link to={`/lyrics/${result.id}`}>View Lyrics</Link> |
                                <Link to={`/audio/${result.id}`}>Play Audio</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Container>

    )
}


import React, { useState } from 'react';
import axios from 'axios';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/api/songs/search?query=${searchTerm}`);
      console.log(response.data);  // Log the response data from the server
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for songs"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;


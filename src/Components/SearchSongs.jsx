import { useState } from 'react';

const SearchSongs = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a song..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchSongs;

//Fetch API 
//const searchSongs = async (query) => {
//   try {
//     const response = await fetch(`/api/songs?query=${query}`);
//     if (!response.ok) {
//       throw new Error('Failed to search for songs');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

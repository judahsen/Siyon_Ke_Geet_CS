// import { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const SearchSongs = () => {
//   const [query, setQuery] = useState('');
//   const [searchResults, setSearchResults] = useState(null);

//   const handleSearch = async () => {
//     const response = await axios.get(`/api/search`, { params: { query } });
//     setSearchResults(response.data.tracks);
//   };

//   return (
//     <div>
//       <h1>Search for Songs</h1>
//       <input value={query} onChange={(e) => setQuery(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>

//       {searchResults && (
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.id}>
//               <p>{result.name} by {result.artists}</p>
//               <Link to={`/lyrics/${result.id}`}>View Lyrics</Link> |
//               <Link to={`/audio/${result.id}`}>Play Audio</Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SearchSongs;


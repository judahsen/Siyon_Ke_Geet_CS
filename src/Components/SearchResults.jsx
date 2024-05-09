import React from 'react';

const SearchResults = ({ results, onSelect }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.title} by {result.artist}
            <button onClick={() => onSelect(result)}>View Lyrics and Chords</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

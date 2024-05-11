import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function SongList() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  // Dummy data for display purposes
  const songs = [
    { id: 1, title: 'Song One', artist: 'Artist One' },
    { id: 2, title: 'Song Two', artist: 'Artist Two' }
  ];

  return (
    <ul>
      {songs.map(song => (
        <li key={song.id}>
          <Link to={`/songs/${song.id}`}>
            {song.title} by {song.artist}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SongList;

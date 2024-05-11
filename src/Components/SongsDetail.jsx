import React from 'react';
import { useParams } from 'react-router-dom';

function SongDetails() {
  const { id } = useParams();

  // Dummy data for a single song
  const song = {
    id,
    title: 'Song One',
    artist: 'Artist One',
    lyrics: 'Here are the song lyrics...'
  };

  return (
    <div>
      <h2>{song.title} - {song.artist}</h2>
      <p>{song.lyrics}</p>
    </div>
  );
}

export default SongDetails;

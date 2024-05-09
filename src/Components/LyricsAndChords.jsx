import React, { useState, useEffect } from 'react';

const LyricsAndChords = ({ song }) => {
  const [lyrics, setLyrics] = useState('');
  const [chords, setChords] = useState('');

  useEffect(() => {
    const fetchLyricsAndChords = async () => {
      try {
        const response = await fetch(`/api/songs/${song.id}/lyrics-and-chords`);
        if (!response.ok) {
          throw new Error('Failed to fetch lyrics and chords');
        }
        const data = await response.json();
        setLyrics(data.lyrics);
        setChords(data.chords);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLyricsAndChords();
  }, [song]);

  return (
    <div>
      <h2>{song.title} by {song.artist}</h2>
      <h3>Lyrics</h3>
      <pre>{lyrics}</pre>
      <h3>Chords</h3>
      <pre>{chords}</pre>
    </div>
  );
};

export default LyricsAndChords;

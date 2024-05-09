import React from 'react';

const PlaylistSongs = ({ songs }) => {
  return (
    <div>
      <h2>Playlist Songs</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} by {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistSongs;

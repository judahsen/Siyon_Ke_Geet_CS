import React from 'react';

const UserPlaylists = ({ playlists, onSelectPlaylist }) => {
  return (
    <div>
      <h2>User Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id} onClick={() => onSelectPlaylist(playlist)}>
            {playlist.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPlaylists;

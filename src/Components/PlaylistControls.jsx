import React from 'react';

const PlaylistControls = ({ playlist, onRenamePlaylist, onDeletePlaylist }) => {
  return (
    <div>
      <h2>Playlist Controls</h2>
      <button onClick={() => onRenamePlaylist(playlist)}>Rename Playlist</button>
      <button onClick={() => onDeletePlaylist(playlist)}>Delete Playlist</button>
    </div>
  );
};

export default PlaylistControls;

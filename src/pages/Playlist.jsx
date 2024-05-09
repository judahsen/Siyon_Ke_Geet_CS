
import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import axios from 'axios';
// import { AuthContext } from '../Context/AuthContext';

function PlaylistManagerPage() {
    const { currentUser } = useAuth();
    const [playlists, setPlaylists] = useState([]);
    const [newPlaylistName, setNewPlaylistName] = useState('');
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);
    const [selectedSongId, setSelectedSongId] = useState('');
  
    useEffect(() => {
      const fetchPlaylists = async () => {
        const response = await axios.get('/api/playlists', { params: { user_id: currentUser.uid } });
        setPlaylists(response.data);
      };
      if (currentUser) {
        fetchPlaylists();
      }
    }, [currentUser]);
  
    const addPlaylist = async () => {
      const response = await axios.post('/api/playlists', {
        user_id: currentUser.uid,
        name: newPlaylistName
      });
      setPlaylists((prev) => [...prev, response.data]);
      setNewPlaylistName('');
    };
  
    const updatePlaylist = async (playlistId, updatedData) => {
      const response = await axios.put(`/api/playlists/${playlistId}`, updatedData);
      setPlaylists((prev) =>
        prev.map((playlist) => (playlist.id === playlistId ? response.data : playlist))
      );
    };
  
    const deletePlaylist = async (playlistId) => {
      await axios.delete(`/api/playlists/${playlistId}`);
      setPlaylists((prev) => prev.filter((playlist) => playlist.id !== playlistId));
      setSelectedPlaylist(null);
    };
  
    const addSongToPlaylist = async (playlistId, songId) => {
      const response = await axios.post(`/api/playlists/${playlistId}/songs`, { song_id: songId });
      setPlaylists((prev) =>
        prev.map((playlist) => (playlist.id === playlistId ? response.data : playlist))
      );
    };
  
    const removeSongFromPlaylist = async (playlistId, songId) => {
      const response = await axios.delete(`/api/playlists/${playlistId}/songs`, {
        data: { song_id: songId }
      });
      setPlaylists((prev) =>
        prev.map((playlist) => (playlist.id === playlistId ? response.data : playlist))
      );
    };
  
    const handleAddSong = () => {
      addSongToPlaylist(selectedPlaylist.id, selectedSongId);
      setSelectedSongId('');
    };
  
    return (
      <div>
        <h1>Manage Playlists</h1>
        <input value={newPlaylistName} onChange={(e) => setNewPlaylistName(e.target.value)} />
        <button onClick={addPlaylist}>Add Playlist</button>
  
        <ul>
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <h2>{playlist.name}</h2>
              <button onClick={() => setSelectedPlaylist(playlist)}>Edit</button>
              <button onClick={() => deletePlaylist(playlist.id)}>Delete</button>
            </li>
          ))}
        </ul>
  
        {selectedPlaylist && (
          <div>
            <h2>Edit Playlist: {selectedPlaylist.name}</h2>
            <input
              value={selectedSongId}
              onChange={(e) => setSelectedSongId(e.target.value)}
              placeholder="Song ID"
            />
            <button onClick={handleAddSong}>Add Song</button>
  
            <ul>
              {selectedPlaylist.songs.map((songId) => (
                <li key={songId}>
                  <span>{songId}</span>
                  <button onClick={() => removeSongFromPlaylist(selectedPlaylist.id, songId)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  export default PlaylistManagerPage;
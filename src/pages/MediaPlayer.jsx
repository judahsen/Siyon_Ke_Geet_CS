// AudioPlayerPage.js
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AudioPlayerPage() {
  const { trackId } = useParams();
  const [audioTrack, setAudioTrack] = useState(null);

  useEffect(() => {
    const fetchAudio = async () => {
      const response = await axios.get('/api/search', { params: { query: trackId } });
      const track = response.data.tracks[0];
      setAudioTrack(track);
    };
    fetchAudio();
  }, [trackId]);

  return (
    <div>
      <h1>Audio for {trackId}</h1>
      {audioTrack && (
        <div>
          <h2>{audioTrack.name} by {audioTrack.artists}</h2>
          <audio controls>
            <source src={audioTrack.preview_url} type="audio/mpeg" />
          </audio>
          <a href={audioTrack.external_url} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
        </div>
      )}
    </div>
  );
}

export default AudioPlayerPage;

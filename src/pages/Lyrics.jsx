
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function LyricsPage() {
  const { trackId } = useParams();
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    const fetchLyrics = async () => {
      const response = await axios.get(`/api/lyrics/${trackId}`);
      setLyrics(response.data.lyrics);
    };
    fetchLyrics();
  }, [trackId]);

  return (
    <div>
      <h1>Lyrics for {trackId}</h1>
      <pre>{lyrics}</pre>
    </div>
  );
}

export default LyricsPage;

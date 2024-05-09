import ReactPlayer from 'react-player';

const MediaPlayer = ({ trackUrl }) => {
  return (
    <div>
      <ReactPlayer url={trackUrl} controls />
    </div>
  );
};

export default MediaPlayer;

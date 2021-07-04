import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
      <div className="content">
        <a className="header">{video.snippet.title}</a>
      </div>
    </div>
  )
}

export default VideoItem;

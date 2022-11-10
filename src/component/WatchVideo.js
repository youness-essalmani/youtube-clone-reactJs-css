import React from 'react'
import { Link } from 'react-router-dom';

function WatchVideo({video}) {
  const {thumbnails, channelTitle, description, title } = video.snippet;
  let videoId;
  if(video.id.videoId){
    videoId = video.id.videoId
  }
  else{
    videoId = video.id;
  }  
  return (
    <div className="watch-video">
      <Link to={`/Watch/${videoId}`}>
        <div className="watch-thumbnail">
          <img src={thumbnails.medium.url} alt={description}/>
        </div>
      </Link>
        <div className="video-details">
          <div className="creator-img">
            {/* <img src={thumbnails.standard.url}/> */}
          </div>
          <div className="title">
            <div className="watch-video-title">
                {title}
            </div>
            <div className="video-creator">
              {channelTitle}
            </div>
            {/* <div className="video-desc">
              <p>{description}</p>
            </div> */}
            <span></span>
          </div>
        </div>
    </div>
  )
}

export default WatchVideo
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Video({video}) {
  const {thumbnails, channelTitle, description, title } = video.snippet;
  const [isWatch, setIsWatch] = useState(false);
  const videoId = video.id;
  const handeWatchVideo = ()=>{
    setIsWatch(true);
  };
  
  return (
    <div className={`video ${isWatch && 'watch-video'}`}>
      <Link to={`/Watch/${videoId}`} onClick={handeWatchVideo}>
        <div className="thumbnail">
          <img src={thumbnails.medium.url} alt={description}/>
        </div>
      </Link>
        <div className="video-details">
          <div className="creator-img">
            {/* <img src={thumbnails.standard.url}/> */}
          </div>
          <div className="title">
            <div className="video-title">
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

export default Video
import React from 'react'
import { Link } from 'react-router-dom';

function SearchVideo({video}) {
  const {thumbnails, channelTitle, description, title } = video.snippet;
  const videoId = video.id.videoId;
  return (
    <div className="search-video">
      <Link to={`/Watch/${videoId}`} className="thumbnail-link">
        <div className="thumbnail" >
          <img src={thumbnails.medium.url} alt={description}/>
        </div>
      </Link>
        <div className="title">
          <div className="video-title">
            {title}
          </div>

          <div className="video-creator">
            {channelTitle}
          </div>

          {/* <div className="video-desc">
            {description}
          </div>
          <span></span> */}
        </div>


    </div>
  )
}

export default SearchVideo
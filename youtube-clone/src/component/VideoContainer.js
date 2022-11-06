import React from 'react'
import {useSelector} from 'react-redux'
import Video from './Video';

function VideoContainer() {
  const { videos } = useSelector((store)=> store.home);
  
  return (
    <div  className= "videos-container" >
        {videos.map((video, index) => {
            return <Video key={index} video={video}/>
        })}
    </div>
  )
}

export default VideoContainer

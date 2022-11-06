import React from 'react'
import {useSelector} from 'react-redux'
import WatchVideo from './WatchVideo';

function WatchContainer() {
  const { videos } = useSelector((store)=> store.home);

  return (
    <div  className= "watch-videos-container" >
        {videos.map((video, index) => {
            return <WatchVideo key={index} video={video}/>
        })}
    </div>
    
  )
}

export default WatchContainer
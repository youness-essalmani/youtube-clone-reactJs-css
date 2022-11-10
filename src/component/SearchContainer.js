import React from 'react'
import {useSelector} from 'react-redux'
import SearchVideo from './SearchVideo';

function SearchContainer() {
  const { videos } = useSelector((store)=> store.video);
  
  return (
    <div  className= "search-container" >
        {videos.map((video, index) => {
            return <SearchVideo key={index} video={video}/>
        })}
    </div>
  )
}

export default SearchContainer





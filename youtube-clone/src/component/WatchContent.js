import React from 'react'
import { useParams } from 'react-router-dom';

function WatchVideo() {
    const {id} = useParams();
  return (
      <div className="watch">
        <iframe src={`https://www.youtube.com/embed/${id}`} title="YouTube video player"
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}>
        </iframe>
      </div>
  )
}

export default WatchVideo

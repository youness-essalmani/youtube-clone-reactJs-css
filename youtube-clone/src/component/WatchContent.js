import React from 'react'
import { useParams } from 'react-router-dom';

function WatchVideo() {
    const {id} = useParams();
  return (
      <div class="watch">
        <iframe src={`https://www.youtube.com/embed/${id}`} title="YouTube video player"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true">
        </iframe>
      </div>
  )
}

export default WatchVideo
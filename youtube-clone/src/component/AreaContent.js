import React from 'react'
import Sidebar from './Sidebar'
import VideoContainer from './VideoContainer'

function AreaContent() {
  return (
    <main className='content-area'>
        <Sidebar/>
        <VideoContainer/>
    </main>
  )
}

export default AreaContent
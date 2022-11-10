import React from 'react'
import WatchContainer from './WatchContainer'
import WatchVideo from './WatchContent'

function WatchArea() {
  return (
    <main className='watch-main'>
      <WatchVideo/>
      <WatchContainer/>
    </main>
  )
}

export default WatchArea

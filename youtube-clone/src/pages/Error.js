import React from 'react'
import Navbar from '../component/Navbar'

function Error() {
  return (
    <div>
      <Navbar/>
      <div className="error-title">
        <h2>
          Page not Found
        </h2>
      </div>
    </div>
  )
}

export default Error
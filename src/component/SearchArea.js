import React from 'react'
import Sidebar from './Sidebar'
import SearchContainer from './SearchContainer'

function SearchArea() {
  return (
    <main className='content-area'>
        <Sidebar/>
        <SearchContainer/>
    </main>
  )
}

export default SearchArea
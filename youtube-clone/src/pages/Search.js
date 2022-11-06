import React from 'react'
import Navbar from "../component/Navbar"
import SearchArea from "../component/SearchArea";
import { useSelector } from 'react-redux';

function Search() {

  const { videos } = useSelector((store) => store.home);

  console.log(videos);

  return (
    
    <div>
      <Navbar/>
      <SearchArea/>
    </div>
  )
}

export default Search
import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import youtube from '../images/youtube-logo.png'
import { Link } from 'react-router-dom';
import { getVideotItems ,getSearchVideos ,clearVideos} from '../features/video/videoSlice';

function Navbar() {

  const dispatch = useDispatch();
  const searchValue = useRef(null);

  const RenderHome = () =>{
    dispatch(clearVideos());
    dispatch(getVideotItems());
  }

  const handleSearch = () =>{

  const searchTerm = searchValue.current.value;
  dispatch(clearVideos());
  dispatch(getSearchVideos(searchTerm));

  }

  
  return (
    <header>
        <div className="left-section">
            <i className="material-icons logo">menu</i>
        <Link to="/" onClick={RenderHome}><img src={youtube} alt="youtube"/></Link>
        </div>
        <div className="mid-section">
            <form className="responsive">
                <input type="text" placeholder='Search' ref={searchValue}/>
                    <Link to="/Search" className='search-link' onClick={handleSearch}>
                      <button>
                        <i className="material-icons">search</i>
                      </button>
                    </Link>
            </form>
        </div>
        <div className="right-section">
            <Link to="/Error" className='signin-link'>
              <button className="signin-btn">
                <i className="material-icons">account_circle</i>
                SIGN IN
              </button>
            </Link>
        </div>
    </header>
  )
}

export default Navbar
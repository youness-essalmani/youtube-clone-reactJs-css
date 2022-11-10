import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside>
            <nav>
                <Link to="/" className="nav-link">
                    <i className="material-icons">home</i>
                    <span id="active-span">Home</span>
                </Link>
                <Link to="/Error"  className="nav-link">
                    <i className="material-icons-outlined">subscriptions</i>
                    <span>Subscriptions</span>
                </Link>
                <div className="line"></div>
                <Link to="/Error" className="nav-link">
                    <i className="material-icons-outlined">video_library</i>
                    <span>Library</span>
                </Link>
                <Link to="/Error" className="nav-link">
                    <i className="material-icons">history</i>
                    <span>History</span>
                </Link>
                <div className="line"></div>
                <div className="signin-container responsive">
                    <p>Sign in to like videos,<br/> comment, and subscribe.</p>
                    <Link to="/Error" className='signin-link'>
                        <button className='signin-btn'>
                            <i className="material-icons">account_circle</i>
                            SIGN IN
                        </button>
                    </Link>
                </div>
            </nav>
            <div className="line"></div>
            <footer className='responsive'>
                <p>&copy; {new Date().getFullYear()} Google LLC</p>
            </footer>
        </aside>
  )
}

export default Sidebar
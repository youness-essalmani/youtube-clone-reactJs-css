import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Search from './pages/Search';
import Watch from './pages/Watch'
import Error from './pages/Error';

function App() {
  
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Watch/:id' element={<Watch/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;

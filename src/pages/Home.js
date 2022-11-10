import Navbar from "../component/Navbar"
import AreaContent from "../component/AreaContent";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getVideotItems} from "../features/video/videoSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideotItems());
  },[dispatch]);
  
  return (
    <div>
      <Navbar/>
      <AreaContent/>
    </div>
  )
}

export default Home
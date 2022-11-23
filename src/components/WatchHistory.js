import React, { useEffect, useState } from 'react'
import './MovieCarousel.css'
import MyCards from './MyCards';
import { useSelector } from 'react-redux';

function WatchHistory() {
  
    const {watchHistory} = useSelector(state => state)
    // const [history, setHistory] = useState([]);

    console.log(watchHistory, ":: THIS IS MY WATCH HISTORY")
    

  useEffect(() => {
  }, []);

  const btnPressPrev = () => {
    let box = document.querySelector('.movie-container1')
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    // console.log("Width: -> ", width)
  }

  const btnPressNext = () => {
    let box = document.querySelector('.movie-container1')
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    // console.log("Width: -> ", width)
  }

  return (

    <div className='movie-carousel'>
      <h3>My Watch History</h3>
      <button className='pre-btn' onClick={btnPressPrev}><p> &lt; </p></button>
      <button className='next-btn' onClick={btnPressNext}><p> &gt; </p></button>

      <div className='movie-container1'>

      
            <MyCards
            // keyNumber={index}
            setTrending={watchHistory}
            />
      </div>

    </div>
  )
}

export default WatchHistory

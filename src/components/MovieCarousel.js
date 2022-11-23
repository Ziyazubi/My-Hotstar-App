import { ContactSupport } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import './MovieCarousel.css'
import MyCards from './MyCards';

function MovieCarousel() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=c437693157c2dcb8ec9a4049654f03b0"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result?.results) {
            // console.log("~~~~ Movie title : ", result?.results[0]?.title);
            let movieData = result?.results;

            // setIsLoaded(true);
            setTrending(movieData);
          }
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const btnPressPrev = () => {
    let box = document.querySelector('.movie-container')
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log("Width: -> ", width)
  }

  const btnPressNext = () => {
    let box = document.querySelector('.movie-container')
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log("Width: -> ", width)
  }

  console.log("trending data",trending?.length)
  return (

    <div className='movie-carousel'>
      <h3>Trending</h3>
      <button className='pre-btn' onClick={btnPressPrev}><p> &lt; </p></button>
      <button className='next-btn' onClick={btnPressNext}><p> &gt; </p></button>

      <div className='movie-container'>

      {
        error ? 
        (
          <>Error: {error.message}</>
        ) 
        : 
        (
          trending.map((movie, index) => (
              <MyCards 
                key={index}
                keyNumber={index}
                setTrending={trending}
                error={error}
              />
            ))
          
        )
      }

        {/* <MyCard cardno='1'/>
        <MyCard cardno='2'/>
        <MyCard cardno='3'/>
        <MyCard cardno='4'/>
        <MyCard cardno='5'/>
        <MyCard cardno='6'/>
        <MyCard cardno='7'/>
        <MyCard cardno='8'/>
        <MyCard cardno='9'/>
        <MyCard cardno='10'/>
        <MyCard cardno='11'/>
        <MyCard cardno='12'/>
        <MyCard cardno='13'/> */}
        {/* <MyCard cardno='14'/>
        <MyCard cardno='15'/>
        <MyCard cardno='16'/> */}
      </div>

    </div>
  )
}

export default MovieCarousel

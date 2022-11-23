import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './MyCard.css'
import { updateWatchHistory } from './redux/reducer';

const MyCards = (props) => {

  const { keyNumber, setTrending } = props;
  const dispatch = useDispatch()

  // const [items, setItems] = useState(props.setTrending)

  const handleMovieCardClick = (movie) => {
    dispatch(updateWatchHistory(movie))
  }

  return (
    <>
      {setTrending.map((movie, index) => (
        <div className='mycard' key={movie.title ? movie.title : movie.name}>
          {/* My Card number: {movie.title} */}
          <img alt='trending-movie-poster' className='card-img' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} onClick={() => handleMovieCardClick(movie)}/>
          <h6 className='trending-movie'>{movie.title ? movie.title : movie.name}</h6>
        </div>
      ))}
    </>
  )
}

export default MyCards

import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';

const MovieProfile = () => {
  const { id } = useParams();
  
  const {data: movie, load, error} = useFetch(`http://localhost:3002/movies/${id}`)

  const genreNames = movie.moviesGenre
    ? movie.moviesGenre.map(mg => mg.genre.name)
    : []; 

  if(load) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Movie Profile</h1>
      <p>Movie ID: {id}</p>

      <p>{movie.description}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Genres: {genreNames.length > 0 ? genreNames.join(', ') : 'No genres available'}</p>
      <img src={movie.image} alt={movie.title} style={{ width: '100px' }} />
      
      <div>Look at you..profile movie page...</div>
    </div>
  );
};

export default MovieProfile;
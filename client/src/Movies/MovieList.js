import React from 'react';
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";

export default function MovieList(props) {
  
  if(!props.movies) return "Loading..."
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieCard  movie={movie} addToSavedList={props.addToSavedList}/>
        </Link>
      ))}
    </div>
  );
}

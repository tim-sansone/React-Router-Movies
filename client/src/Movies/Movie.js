import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"

import MovieCard from "./MovieCard"

export default function Movie(props) {
  
  const [movie, setMovie] = useState();
  const { id } = useParams();
  
  
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    
  }, []);

  
  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={movie} addToSavedList={props.addToSavedList}/>
  );
}

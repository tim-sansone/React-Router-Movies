import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"

import MovieCard from "./MovieCard"

export default function Movie() {
  
  const [movie, setMovie] = useState();
 
  const { id } = useParams();
  
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        
        setMovie(response.data);
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, []);

    
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }


  return (
    <MovieCard movie={movie}/>
  );
}

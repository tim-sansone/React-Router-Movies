import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Route, Switch } from "react-router-dom"

import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie"

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response);
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    if (movieList.data) {
      const newMovie = movieList.data.find(each => each.id === id);
      if(!saved.includes(newMovie)) {
      setSaved([...saved, newMovie])
      }
    } 
    
  };

  
  
  return (
    <div>
      <SavedList list={saved} setSaved={setSaved}/>
      <Switch>
        <Route path="/movies/:id">
          <Movie addToSavedList={addToSavedList}/>
        </Route>
        <Route path="/">
          <MovieList movies={movieList.data} addToSavedList={addToSavedList}/>
        </Route>
      </Switch>
    </div>
  );
}

import React from 'react';
import { useRouteMatch } from "react-router-dom"

export default function MovieCard (props) {

  const { url, path } = useRouteMatch();
  console.log(url);
  console.log(path);
 
  const { title, director, metascore, stars, id } = props.movie;
  const { addToSavedList } = props;
  
  const saveMovie = (id, event) => {
      event.preventDefault();
      addToSavedList(id);
   }

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
        { stars &&
           stars.map(star => (
              <div key={star} className="movie-star">
                {star}
              </div>
            ))
        }
      </div>
      <div className="save-button" onClick={event => saveMovie(id, event)}>Save</div>
    </div>
  );
}

import React from 'react';

export default function MovieCard (props) {

 
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

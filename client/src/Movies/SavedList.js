import React from 'react';

import { Link, NavLink, useRouteMatch } from "react-router-dom";

export default function SavedList(props) {
  
  const setSaved = props.setSaved;
  // const { url, path } = useRouteMatch();
  // console.log(url);
  // console.log(path);

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`/movies/${movie.id}`} key={movie.id}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <div className="buttons">
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
        <div className="home-button" onClick={() => setSaved([])}>Clear Saved</div>
      </div>
    </div>
  );
}

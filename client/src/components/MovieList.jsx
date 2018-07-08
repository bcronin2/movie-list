import React from "React";
import PropTypes from "prop-types";
import MovieListEntry from "./MovieListEntry.jsx";

export function MovieList(props) {
  let list = (list = props.movies.map((movie, index) => (
    <MovieListEntry
      key={index}
      index={index}
      movie={movie}
      toggle={props.toggle}
    />
  )));

  list = list.length ? list : <div>No movies found. Add some!</div>;

  return <div className="movie-list">{list}</div>;
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

import React from "React";
import PropTypes from "prop-types";
import MovieListEntry from "./MovieListEntry.jsx";

export default class MovieList extends React.Component {
  render() {
    let list = <div>Oops! No movies found.</div>;

    if (this.props.movies.length) {
      list = this.props.movies.map((movie, index) => (
        <MovieListEntry key={index} movie={movie} />
      ));
    }

    return <div className="movie-list">{list}</div>;
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

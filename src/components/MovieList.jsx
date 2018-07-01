import React from "React";
import PropTypes from "prop-types";
import MovieListEntry from "./MovieListEntry.jsx";

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-list">
        <div className="movie-list-heading"> Movie List </div>
        <div>
          {this.props.movies.map((movie, index) => (
            <MovieListEntry key={index} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

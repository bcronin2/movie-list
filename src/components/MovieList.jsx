import React from "React";
import PropTypes from "prop-types";
import MovieListEntry from "./MovieListEntry.jsx";

export default class MovieList extends React.Component {
  render() {
    let list = (list = this.props.movies.map((movie, index) => (
      <MovieListEntry
        key={index}
        index={index}
        movie={movie}
        toggle={this.props.toggle}
      />
    )));

    list = list.length ? list : <div>Oops! No movies found.</div>;

    return <div className="movie-list">{list}</div>;
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

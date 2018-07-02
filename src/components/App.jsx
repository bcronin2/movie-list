import React from "React";
import MovieList from "./MovieList.jsx";
import Search from "./Search.jsx";
import Add from "./Add.jsx";
import IMDB from "../lib/IMDBSearch.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      query: "",
      filter: -1
    };
  }

  updateSearch(event) {
    this.setState({ query: event.target.value.toLowerCase() });
  }

  updateMovieList(event) {
    if (event.key === "Enter" && !this.hasTitle(event.target.value)) {
      IMDB.search(event.target.value, this.addMovie.bind(this));
      event.target.value = "";
    }
  }

  addMovie(movie) {
    if (movie) {
      movie.watched = false;
      this.state.movies.push(movie);
      this.refreshMovieList();
      // console.log(this.state.movies);
    }
  }

  toggleWatched(index) {
    this.state.movies[index].watched = !this.state.movies[index].watched;
    this.refreshMovieList();
  }

  refreshMovieList() {
    this.setState({ movies: this.state.movies });
  }

  hasTitle(title) {
    return this.state.movies.reduce(
      (containsMovie, currentMovie) =>
        containsMovie || currentMovie.title === title,
      false
    );
  }

  render() {
    return (
      <div>
        <div className="heading"> Movie List </div>
        <Add add={this.updateMovieList.bind(this)} />
        <Search search={this.updateSearch.bind(this)} />
        <div className="filter">
          <span
            id="all"
            onClick={() => this.setState({ filter: -1 })}
            className={this.state.filter === -1 ? "bold" : ""}
          >
            All
          </span>
          <span
            id="seen"
            onClick={() => this.setState({ filter: 1 })}
            className={this.state.filter === 1 ? "bold" : ""}
          >
            Seen
          </span>
          <span
            id="unseen"
            onClick={() => this.setState({ filter: 0 })}
            className={this.state.filter === 0 ? "bold" : ""}
          >
            Unseen
          </span>
        </div>
        <MovieList
          movies={this.state.movies.filter(
            movie =>
              movie.title.toLowerCase().match(this.state.query) &&
              (this.state.filter < 0 ||
                (movie.watched && this.state.filter) ||
                (!movie.watched && !this.state.filter))
          )}
          toggle={this.toggleWatched.bind(this)}
        />
      </div>
    );
  }
}

App.defaultProps = {
  movies: [
    { title: "Mean Girls", watched: false },
    { title: "Hackers", watched: false },
    { title: "The Grey", watched: false },
    { title: "Sunshine", watched: false },
    { title: "Ex Machina", watched: false }
  ]
};

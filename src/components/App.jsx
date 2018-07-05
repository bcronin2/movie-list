import React from "React";
import { MovieList } from "./MovieList.jsx";
import { Search } from "./Search.jsx";
import { Filter } from "./Filter.jsx";
import { FindAndAdd } from "./FindAndAdd.jsx";
import IMDB from "../lib/IMDBSearch.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: props.movieList,
      movieListSearchQuery: "",
      filterValue: this.props.filterValues["all"],
      databaseResults: []
    };
  }

  handleMovieListSearch(event) {
    this.setState({ movieListSearchQuery: event.target.value.toLowerCase() });
  }

  setFilterValue(filterValue) {
    this.setState({ filterValue: filterValue });
  }

  toggleWatched(movie) {
    movie.watched = !movie.watched;
    this.refreshMovieList();
  }

  handleDatabaseSearch(event) {
    this.inputField = event.target;
    IMDB.search(event.target.value, databaseResults => {
      this.setState({ databaseResults: databaseResults });
    });
  }

  addMovie(movie) {
    if (movie && !this.hasTitle(movie.title)) {
      movie.watched = false;
      this.state.movieList.push(movie);
      this.refreshMovieList();
    }
  }

  refreshMovieList() {
    this.setState({ movieList: this.state.movieList, databaseResults: [] });
    if (this.inputField) {
      this.inputField.value = "";
      this.inputField.focus();
    }
  }

  hasTitle(title) {
    return this.state.movieList.reduce(
      (containsMovie, currentMovie) =>
        containsMovie ||
        currentMovie.title.toLowerCase() === title.toLowerCase(),
      false
    );
  }

  render() {
    return (
      <div>
        <div className="heading"> My Movies </div>
        <div className="inputs">
          <FindAndAdd
            search={this.handleDatabaseSearch.bind(this)}
            results={this.state.databaseResults.slice(0, 5)}
            select={this.addMovie.bind(this)}
          />
          <Search search={this.handleMovieListSearch.bind(this)} />
        </div>
        <Filter
          value={this.state.filterValue}
          values={this.props.filterValues}
          setValue={this.setFilterValue.bind(this)}
        />
        <MovieList
          movies={this.state.movieList.filter(
            movie =>
              movie.title
                .toLowerCase()
                .match(this.state.movieListSearchQuery) &&
              (this.state.filterValue === this.props.filterValues["all"] ||
                (movie.watched &&
                  this.state.filterValue === this.props.filterValues["seen"]) ||
                (!movie.watched &&
                  this.state.filterValue === this.props.filterValues["unseen"]))
          )}
          toggle={this.toggleWatched.bind(this)}
        />
      </div>
    );
  }
}

App.defaultProps = {
  filterValues: { all: 2, seen: 1, unseen: 0 },
  movieList: [
    // { title: "Mean Girls", watched: false },
    // { title: "Hackers", watched: false },
    // { title: "The Grey", watched: false },
    // { title: "Sunshine", watched: false },
    // { title: "Ex Machina", watched: false }
  ]
};

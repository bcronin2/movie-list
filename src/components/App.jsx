import React from "React";
import MovieList from "./MovieList.jsx";
import Search from "./Search.jsx";
import FindAndAdd from "./FindAndAdd.jsx";
import Filter from "./Filter.jsx";
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

  searchMovieList(event) {
    this.setState({ movieListSearchQuery: event.target.value.toLowerCase() });
  }

  setFilterValue(filterValue) {
    this.setState({ filterValue: filterValue });
  }

  toggleWatched(index) {
    this.state.movieList[index].watched = !this.state.movieList[index].watched;
    this.refreshMovieList();
  }

  searchDatabase(event) {
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
      this.inputField.focus;
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
        <div className="heading"> Movie List </div>
        <div className="inputs">
          <FindAndAdd
            results={this.state.databaseResults.slice(0, 5)}
            search={this.searchDatabase.bind(this)}
            select={this.addMovie.bind(this)}
          />
          <Search search={this.searchMovieList.bind(this)} />
        </div>
        <Filter
          value={this.state.filterValue}
          values={this.props.filterValues}
          setValue={this.setFilterValue.bind(this)}
        />
        <MovieList
          movies={this.state.movieList
            .slice(0, 5)
            .filter(
              movie =>
                movie.title
                  .toLowerCase()
                  .match(this.state.movieListSearchQuery) &&
                (this.state.filterValue === this.props.filterValues["all"] ||
                  (movie.watched &&
                    this.state.filterValue ===
                      this.props.filterValues["seen"]) ||
                  (!movie.watched &&
                    this.state.filterValue ===
                      this.props.filterValues["unseen"]))
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

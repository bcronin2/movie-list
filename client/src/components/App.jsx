import React from "React";
import { MovieList } from "./MovieList.jsx";
import { Search } from "./Search.jsx";
import { Filter } from "./Filter.jsx";
import { FindAndAdd } from "./FindAndAdd.jsx";
import IMDB from "../lib/IMDB.js";
import movieCollection from "../lib/movieCollection.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: props.movieList,
      movieListSearchQuery: "",
      filterValue: this.props.filterValues["all"],
      imdbResults: []
    };
    this.retrieveMovies();
  }

  retrieveMovies() {
    movieCollection.get(movies => {
      this.setState.bind(this)({ movieList: movies });
    });
  }

  addMovie(movie) {
    if (movie) {
      movieCollection.post(movie, this.retrieveMovies.bind(this));
      this.setState({ imdbResults: [] });
    }
  }

  toggleWatched(movie) {
    movieCollection.put(movie, this.retrieveMovies.bind(this));
  }

  setFilterValue(filterValue) {
    this.setState({ filterValue: filterValue });
  }

  handleMovieListSearch(event) {
    this.setState({ movieListSearchQuery: event.target.value.toLowerCase() });
  }

  handleIMDBSearch(event) {
    this.inputField = event.target;
    IMDB.search(event.target.value, imdbResults => {
      this.setState({ imdbResults: imdbResults });
    });
  }

  render() {
    return (
      <div>
        <div className="heading"> My Movies </div>
        <div className="inputs">
          <FindAndAdd
            search={this.handleIMDBSearch.bind(this)}
            results={this.state.imdbResults.slice(0, 5)}
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

import React from "React";
import MovieList from "./MovieList.jsx";
import Search from "./Search.jsx";
import Add from "./Add.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      query: ""
    };
  }

  updateSearch(e) {
    this.setState({ query: e.target.value.toLowerCase() });
  }

  addMovie(e) {
    console.log(this.hasTitle(e.target.value));
    if (e.key === "Enter" && !this.hasTitle(e.target.value)) {
      this.state.movies.push({ title: e.target.value });
      this.setState({ movies: this.state.movies });
      e.target.value = "";
    }
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
        <Add add={this.addMovie.bind(this)} />
        <Search search={this.updateSearch.bind(this)} />
        <MovieList
          movies={this.state.movies.filter(movie =>
            movie.title.toLowerCase().match(this.state.query)
          )}
        />
      </div>
    );
  }
}

App.defaultProps = {
  movies: [
    { title: "Mean Girls" },
    { title: "Hackers" },
    { title: "The Grey" },
    { title: "Sunshine" },
    { title: "Ex Machina" }
  ]
};

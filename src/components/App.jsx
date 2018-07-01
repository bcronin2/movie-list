import React from "React";
import MovieList from "./MovieList.jsx";
import Search from "./Search.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      query: ""
    };
  }

  updateQuery(e) {
    this.setState({ query: e.target.value.toLowerCase() });
  }

  render() {
    return (
      <div>
        <div className="heading"> Movie List </div>
        <Search search={this.updateQuery.bind(this)} />
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

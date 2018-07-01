import React from "React";
import MovieList from "./MovieList.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

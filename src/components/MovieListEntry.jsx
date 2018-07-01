import React from "React";
import PropTypes from "prop-types";

export default class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="movie-list-entry">{this.props.movie["title"]}</div>;
  }
}

MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired
};

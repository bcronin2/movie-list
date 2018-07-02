import React from "React";
import PropTypes from "prop-types";

export default class MovieListEntry extends React.Component {
  render() {
    return (
      <div className="movie-list-entry">
        <div>{this.props.movie["title"]}</div>
        <div>
          <input
            type="checkbox"
            checked={this.props.movie.watched ? "checked" : ""}
            onClick={() => this.props.toggle(this.props.index)}
          />
        </div>
      </div>
    );
  }
}

MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired
};

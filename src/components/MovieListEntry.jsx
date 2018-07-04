import React from "React";
import PropTypes from "prop-types";

export default class MovieListEntry extends React.Component {
  render() {
    return (
      <div className="movie-list-entry">
        <div>
          <div>{this.props.movie["title"]}</div>
          <img
            className="thumbnail"
            src={`${this.props.imageUrl}${this.props.movie["backdrop_path"]}`}
          />
          <span>
            <input
              type="checkbox"
              checked={this.props.movie.watched ? "checked" : ""}
              onChange={() => this.props.toggle(this.props.index)}
            />
          </span>
        </div>
      </div>
    );
  }
}

MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired
};

MovieListEntry.defaultProps = {
  imageUrl: "https://image.tmdb.org/t/p/w500/"
};

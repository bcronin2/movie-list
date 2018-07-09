import React from "React";
import PropTypes from "prop-types";

export default class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.movie.title !== this.props.movie.title) {
      this.setState({ showDetails: false });
    }
  }

  toggleDetails() {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    let details = <div />;
    if (this.state.showDetails) {
      details = (
        <div className="movie-list-entry-details">
          <span className="movie-list-entry-metadata">
            <div>
              <span className="bold">Release year: </span>
              {this.props.movie.year}
            </div>
            <div>
              <span className="bold">Rating: </span>
              {this.props.movie.rating}
            </div>
            <span className="bold">Seen it? </span>
            <input
              type="checkbox"
              checked={this.props.movie.watched ? "checked" : ""}
              onChange={() => this.props.update(this.props.movie)}
            />
          </span>
          <img
            className="movie-list-entry-thumbnail"
            src={`${this.props.imageUrl}${this.props.movie.poster}`}
          />
        </div>
      );
    }

    return (
      <div className="movie-list-entry">
        <div className="movie-list-entry-heading">
          <span
            className="movie-list-entry-title"
            onClick={this.toggleDetails.bind(this)}
          >
            {this.props.movie["title"]}
            <span className="tooltip">
              {this.state.showDetails ? "Hide" : "Show"} details
            </span>
          </span>
          <span
            className="movie-list-entry-remove"
            onClick={() => this.props.delete(this.props.movie)}
          >
            &times;
            <span className="tooltip">Delete movie</span>
          </span>
        </div>
        {details}
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

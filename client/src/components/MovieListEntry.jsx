import React from "React";
import PropTypes from "prop-types";

export default class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false };
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
              {this.props.movie["release_date"].split("-")[0]}
            </div>
            <div>
              <span className="bold">Rating: </span>
              {this.props.movie["vote_average"]}
            </div>
            <span className="bold">Seen it? </span>
            <input
              type="checkbox"
              checked={this.props.movie.watched ? "checked" : ""}
              onChange={() => this.props.toggle(this.props.movie)}
            />
          </span>
          <img
            className="movie-list-entry-thumbnail"
            src={`${this.props.imageUrl}${this.props.movie["poster_path"] ||
              "default"}`}
          />
        </div>
      );
    }

    return (
      <div className="movie-list-entry">
        <div
          className="movie-list-entry-title"
          onClick={this.toggleDetails.bind(this)}
        >
          {this.props.movie["title"]}
          <span className="tooltip">
            {this.state.showDetails ? "Hide" : "Show"} details
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

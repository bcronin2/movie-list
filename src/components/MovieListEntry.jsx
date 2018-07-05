import React from "React";
import PropTypes from "prop-types";

export function MovieListEntry(props) {
  return (
    <div className="movie-list-entry">
      <div>
        <div>{props.movie["title"]}</div>
        <img
          className="thumbnail"
          src={`${props.imageUrl}${props.movie["poster_path"]}`}
        />
        <span>
          <input
            type="checkbox"
            checked={props.movie.watched ? "checked" : ""}
            onChange={() => props.toggle(props.index)}
          />
        </span>
      </div>
    </div>
  );
}

MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired
};

MovieListEntry.defaultProps = {
  imageUrl: "https://image.tmdb.org/t/p/w500/"
};

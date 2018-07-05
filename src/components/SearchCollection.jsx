import React from "React";
import PropTypes from "prop-types";

export function SearchCollection(props) {
  return (
    <div className="search-collection">
      <input
        type="text"
        onKeyUp={props.search}
        placeholder="Search collection..."
        autoFocus
      />
    </div>
  );
}

SearchCollection.propTypes = {
  search: PropTypes.func.isRequired
};

import React from "React";
import PropTypes from "prop-types";

export function Search(props) {
  return (
    <div className="search-collection">
      <input
        type="text"
        onKeyUp={props.search}
        placeholder="Search collection..."
      />
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.func.isRequired
};

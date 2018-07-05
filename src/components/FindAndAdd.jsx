import React from "React";
import PropTypes from "prop-types";

export function FindAndAdd(props) {
  return (
    <div className="find-and-add">
      <input
        type="text"
        id="database-search-input"
        onKeyUp={props.search}
        placeholder="Find and add..."
        autoFocus
      />
      <div id="database-search-dropdown-list">
        {props.results.map((result, index) => (
          <div
            key={index}
            tabIndex={index}
            className="dropdown-entry"
            onClick={() => props.select(result)}
          >
            {result.title}
          </div>
        ))}
      </div>
    </div>
  );
}

FindAndAdd.propTypes = {
  search: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
};

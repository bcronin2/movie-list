import React from "React";
import PropTypes from "prop-types";

export default class FindAndAdd extends React.Component {
  render() {
    return (
      <div className="find-and-add">
        <input
          type="text"
          id="database-search-input"
          onKeyUp={this.props.search}
          placeholder="Find and add..."
        />
        <div id="database-search-dropdown-list">
          {this.props.results.map((result, index) => (
            <div
              key={index}
              className="dropdown-entry"
              onClick={() => {
                this.props.select(result);
              }}
            >
              {result.title}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

FindAndAdd.propTypes = {
  search: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
};

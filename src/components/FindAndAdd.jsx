import React from "React";
import PropTypes from "prop-types";

export default class FindAndAdd extends React.Component {
  render() {
    return (
      <div className="add-bar">
        <input
          type="text"
          onKeyUp={this.props.search}
          placeholder="Find and add..."
        />
        <div className="dropdown-list">
          {this.props.results.map((result, index) => (
            <div
              className="dropdown-entry"
              onClick={() => this.props.select(result)}
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

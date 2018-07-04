import React from "React";
import PropTypes from "prop-types";

export default class FindAndAdd extends React.Component {
  render() {
    return (
      <div className="add-bar">
        <input
          type="text"
          onKeyUp={this.props.search}
          placeholder="Add movie"
        />
        {this.props.results.map((result, index) => (
          <div onClick={() => this.props.select(result)}>{result.title}</div>
        ))}
      </div>
    );
  }
}

FindAndAdd.propTypes = {
  search: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
};

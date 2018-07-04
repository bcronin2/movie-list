import React from "React";
import PropTypes from "prop-types";

export default class Search extends React.Component {
  render() {
    return (
      <div className="search-collection">
        <input
          type="text"
          onKeyUp={this.props.search}
          placeholder="Search collection..."
          autoFocus
        />
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired
};

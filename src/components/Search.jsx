import React from "React";
import PropTypes from "prop-types";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar">
        <input type="text" onKeyUp={this.props.search} autoFocus />
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired
};

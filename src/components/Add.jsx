import React from "React";
import PropTypes from "prop-types";

export default class Add extends React.Component {
  render() {
    return (
      <div className="add-bar">
        <input type="text" onKeyUp={this.props.add} placeholder="Add movie" />
      </div>
    );
  }
}

Add.propTypes = {
  add: PropTypes.func.isRequired
};

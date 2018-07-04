import React from "React";

export default class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <span
          id="all"
          onClick={() => this.props.setValue(this.props.values["all"])}
          className={
            this.props.value === this.props.values["all"] ? "bold" : ""
          }
        >
          All
        </span>
        <span
          id="seen"
          onClick={() => this.props.setValue(this.props.values["seen"])}
          className={
            this.props.value === this.props.values["seen"] ? "bold" : ""
          }
        >
          Seen
        </span>
        <span
          id="unseen"
          onClick={() => this.props.setValue(this.props.values["unseen"])}
          className={
            this.props.value === this.props.values["unseen"] ? "bold" : ""
          }
        >
          Unseen
        </span>
      </div>
    );
  }
}

import React from "React";

export function Filter(props) {
  return (
    <div className="filter">
      <span
        id="all"
        onClick={() => props.setValue(props.values["all"])}
        className={props.value === props.values["all"] ? "bold" : ""}
      >
        All
      </span>
      <span
        id="seen"
        onClick={() => props.setValue(props.values["seen"])}
        className={props.value === props.values["seen"] ? "bold" : ""}
      >
        Seen
      </span>
      <span
        id="unseen"
        onClick={() => props.setValue(props.values["unseen"])}
        className={props.value === props.values["unseen"] ? "bold" : ""}
      >
        Unseen
      </span>
    </div>
  );
}

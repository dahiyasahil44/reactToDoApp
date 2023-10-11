import React from "react";

function GroupList(props) {
  return (
    <div className="group-list">
      <span
        className="del-grp"
        onClick={(e) => {
          props.deleteGroup(props.index);
        }}
      >
        <i className="fa fa-trash-alt"></i>
      </span>
      <span className="group-text">From</span>
      <span className="group-field">{props.inputFrom}</span>
      <span className="group-text">to</span>
      <span className="group-field">{props.inputTo}</span>
    </div>
  );
}

export default GroupList;

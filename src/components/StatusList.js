import React from "react";

function StatusList(props) {
  return (
    <span className="status-list">
      ({props.id}) {props.status ? "True" : "False"}
    </span>
  );
}

export default StatusList;

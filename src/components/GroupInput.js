import React, { useState } from "react";

function TaskGroup(props) {
  const [inputFrom, setInputFrom] = useState(1);
  const [inputTo, setInputTo] = useState(10);

  return (
    <div className="">
      <div className="group-list">
        <span className="group-text">From</span>
        <span className="group-field">
          <input
            type="number"
            className="group-input"
            onChange={(e) => {
              setInputFrom(Number(e.target.value));
            }}
            value={inputFrom}
          />
        </span>
        <span className="group-text">to</span>
        <span className="group-field">
          <input
            type="number"
            className="group-input"
            onChange={(e) => {
              setInputTo(Number(e.target.value));
            }}
            value={inputTo}
          />
        </span>
      </div>
      <button
        className="add-group"
        onClick={() => {
          props.addGroup(inputFrom, inputTo);
          setInputFrom(1);
          setInputTo(10);
        }}
      >
        Add Group
      </button>
    </div>
  );
}

export default TaskGroup;

import React, { useState } from "react";
import "./TypingForm.css";

const TypingForm = (props) => {
  const [enteredData, setEnteredData] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveDataHandler(enteredData);
    setEnteredData("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="type-form">
          <input
            type="text"
            placeholder="My day was..."
            value={enteredData || ""}
            onChange={event => setEnteredData(event.target.value)}
          />
          <button type="submit">Go On!</button>
        </div>
      </form>
    </div>
  );
};

export default TypingForm;

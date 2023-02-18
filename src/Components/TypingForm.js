import React, { useState } from "react";
import "./TypingForm.css";

const TypingForm = (props) => {
  const [enteredData, setEnteredData] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredData(event.target.value);

    const submitedData = {
      data: enteredData,
    };
    props.onSaveDataHandler(submitedData);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="type-form">
          <input
            type="text"
            placeholder="My day was..."
            value={enteredData || ""}
            onChange={submitHandler}
          />
          <button type="submit">Go On!</button>
        </div>
      </form>
    </div>
  );
};

export default TypingForm;

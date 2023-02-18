import React from "react";
import "./TitleForm.css";
import TypingForm from "./TypingForm.js";

const TitleForm = (props) => {
  const saveDataHandler = (enteredData) => {
    const saveData = {
      ...enteredData,
    };
    props.onAddSavedData(saveData);
  };
  return (
    <div className="font__color">
      <h1>How's Your Day?</h1>
      <h4>Type down there</h4>
      <TypingForm onSaveDataHandler={saveDataHandler} />
    </div>
  );
};

export default TitleForm;

import React, { useState } from "react";
import "./ExampleComment.css";

const ExampleComment = (props) => {
  const [defaultcomment, setDefaultComment] = useState(props.comment);
  const tab = ["New comment 1", "New comment 2", "New comment 3"];
  const NeweExampleComment = () => {
    setDefaultComment(tab[Math.floor(Math.random() * tab.length)]);
  };

  return (
    <div className="comment__bar" onClick={NeweExampleComment}>
      <div>Number of comment: {props.rate}</div>
      <div>Comment: {defaultcomment} </div>
    </div>
  );
};

export default ExampleComment;

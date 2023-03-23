import React from "react";
import "./ExampleComment.css";

const ExampleComment = (props) => {
  return (
    <div className="comment__bar">
      <div>Number of comment: {props.rate}</div>
      <div>Comment: {props.comment} </div>
    </div>
  );
};

export default ExampleComment;

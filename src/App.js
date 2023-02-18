import React, { useState } from "react";
import TitleForm from "./Components/TitleForm";
import ExampleComment from "./Components/ExampleComment";

const DUMMY_DATA = [
  {
    comment: "I am happy, because i woke up with smile",
  },
  {
    comment: "Today, I am going to swimming pool",
  },
  {
    comment: "Today, I am going to swimming pool",
  },
];

function App() {
  const [getData, setGetData] = useState(DUMMY_DATA);
  const addDataHandler = (savedData) => {
    setGetData([{ comment: savedData }, ...getData]);
  };
  return (
    <div>
      <TitleForm onAddSavedData={addDataHandler} />
      {getData.map((data, index) => (
        <ExampleComment
          key={index}
          rate={index + 1}
          comment={data.comment}
        />
      ))}
    </div>
  );
}

export default App;

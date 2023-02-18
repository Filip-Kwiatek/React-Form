import React, { useState } from "react";
import TitleForm from "./Components/TitleForm";
import ExampleComment from "./Components/ExampleComment";

const DUMMY_DATA = [
  {
    rate: 3,
    comment: "I am happy, because i woke up with smile",
  },
  {
    rate: 4,
    comment: "Today, I am going to swimming pool",
  },
  {
    rate: 5,
    comment: "Today, I am going to swimming pool",
  },
];

function App() {
  const [getData, setGetData] = useState(DUMMY_DATA);
  const addDataHandler = (savedData) => {
    setGetData([savedData, ...getData]);
  };
  return (
    <div>
      <TitleForm onAddSavedData={addDataHandler} />
      <ExampleComment
        rate={DUMMY_DATA[0].rate}
        comment={DUMMY_DATA[0].comment}
      />
      <ExampleComment
        rate={DUMMY_DATA[1].rate}
        comment={DUMMY_DATA[1].comment}
      />
      <ExampleComment
        rate={DUMMY_DATA[2].rate}
        comment={DUMMY_DATA[2].comment}
      />
    </div>
  );
}

export default App;

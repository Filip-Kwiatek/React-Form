import "./NewData.css";
import TypicalForm from "./TypicalForm";

const NewData = (props) => {
  return (
    <div className="box-form">
      <div className="box-form--data">
        {props.item.map(data => <TypicalForm text={data.text}/>)}
      </div>
    </div>
  );
};

export default NewData;

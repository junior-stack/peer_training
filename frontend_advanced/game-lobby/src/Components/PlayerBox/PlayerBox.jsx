import "./PlayerBox.css";
import SelectButton from "../SelectButton/SelectButton";
import { useContext } from "react";
import userContext from "../../Context/userContext";

const PlayerBox = (props) => {
  const { users } = useContext(userContext);
  return (
    <div className="outside" style={{ background: users[props.id] }}>
      <div className="title">
        <h1>P{props.id + 1}</h1>
      </div>
      <SelectButton id={props.id} />
    </div>
  );
};

export default PlayerBox;

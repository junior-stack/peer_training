import "./PlayerBox.css";
import SelectButton from "../SelectButton/SelectButton";
import { useContext } from "react";
import Context from "../../Context/context";

const PlayerBox = (props) => {
  const { users } = useContext(Context);
  return (
    <div className="outside" style={{ background: users[props.id].color }}>
      <div className="title">
        <h1>P{props.id + 1}</h1>
      </div>
      <SelectButton id={props.id} />
    </div>
  );
};

export default PlayerBox;

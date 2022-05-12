import "./PlayerBox.css";
import SelectButton from "../SelectButton/SelectButton";
import { useContext } from "react";
import ColorContext from "../../Context/ColorContext";

const PlayerBox = (props) => {
  const { users } = useContext(ColorContext);
  return (
    <div className="outside" style={{ background: users[props.id] }}>
      <div className="title">
        <h1>P{props.indice + 1}</h1>
      </div>
      <SelectButton id={props.id} />
    </div>
  );
};

export default PlayerBox;

import "./../theme/box.css";
import SelectButton from "./SelectButton";
import { useContext } from "react";
import Context from "./../Context/context";

const Box = (props) => {
    const {users} = useContext(Context);
    console.log("users: ", users)
    return (
        <div className="outside">
            <div className="title"><h1>P{props.id + 1}</h1></div>
            <SelectButton id={props.id}/>
        </div>
    )
}

export default Box
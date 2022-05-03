import "./../theme/box.css"
import SelectButton from "./SelectButton"
const Box = (props) => {

    return (

        <div className="outside">
            <div className="title"><h1>P{props.id}</h1></div>

                {/* <input type="checkbox">a</input> */}
            <SelectButton />
        </div>
    )
}

export default Box
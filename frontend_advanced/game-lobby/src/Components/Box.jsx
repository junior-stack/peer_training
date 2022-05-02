import "./../theme/box.css"
const Box = (props) => {
    return (
        <div className="outside">
            <div className="title">P{props.id}</div>
            <div>
                {/* <input type="checkbox">a</input> */}
                a
            </div>
        </div>
    )
}

export default Box
import Box from "./Box";

const Container = (props) => {

    return ( 
    <div className="Container">
        <h1>Game Lobby</h1>
        <div>
            <Box id="1"/>
            <Box id="2"/>
            <Box id="3"/>
            <Box id="4"/>
        </div>
    </div>
    )

}

export default Container;
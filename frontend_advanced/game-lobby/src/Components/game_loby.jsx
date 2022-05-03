import { useState } from "react";
import Box from "./Box";
import React from "react";
import Container from "@material-ui/core/Container";

const colorContext = React.createContext()

const Containers = (props) => {

    const [users, setUsers] = useState([
        {id: 1, color: "white"},
        {id: 2, color: "white"},
        {id: 3, color: "white"},
        {id: 4, color: "white"}
    ])
    return ( 
    <colorContext.Provider value={{users: users, setUsers: setUsers}}>
        <Container>
            <div className="Container">
                <h1>Game Lobby</h1>
                <div>
                    {users.map((element) =>{
                        return <Box key={element.id} id={element.id} />
                    })}
                </div>
            </div>
        </Container>
    </colorContext.Provider>
    )

}

export default Containers;
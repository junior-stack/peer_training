import { useMemo, useState, useSyncExternalStore } from "react";
import Box from "./Box";
import React from "react";
import Container from "@material-ui/core/Container";
import Context from "./../Context/context"

const Containers = (props) => {

    const [users, setUsers] = useState([
        {id: 0, color: "white"},
        {id: 1, color: "white"},
        {id: 2, color: "white"},
        {id: 3, color: "white"}
    ])

    const value = useMemo(
        () => ({users, setUsers}),
        [users]
    )
    return ( 
    <Context.Provider value={value}>
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
    </Context.Provider>
    )

}

export default Containers;
import { useMemo, useState } from "react";
import PlayerBox from "../PlayerBox/PlayerBox";
import React from "react";
import Container from "@material-ui/core/Container";
import Context from "../../Context/context";
import "./game_loby.css";

const GameLoby = (props) => {
  const [users, setUsers] = useState([
    { id: 0, color: "white" },
    { id: 1, color: "white" },
    { id: 2, color: "white" },
    { id: 3, color: "white" },
  ]);

  const value = useMemo(() => ({ users, setUsers }), [users]);
  return (
    <Context.Provider value={value}>
      <Container>
        <div className="Container">
          <div>
            <h1>Game Lobby</h1>
          </div>
          <div>
            {users.map((element) => {
              return <PlayerBox key={element.id} id={element.id} />;
            })}
          </div>
        </div>
      </Container>
    </Context.Provider>
  );
};

export default GameLoby;

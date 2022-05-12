import PlayerBox from "./../../Components/PlayerBox/PlayerBox";
import React from "react";
import Container from "@material-ui/core/Container";
import "./game_loby.css";
import { useContext } from "react";
import ColorContext from "../../Context/ColorContext";

const GameLoby = (props) => {
  console.log("gamelobby");
  const { users } = useContext(ColorContext);

  return (
    <Container>
      <div className="Container">
        <div>
          <h1>Game Lobby</h1>
        </div>
        <div>
          {Object.keys(users).map((element, Index) => {
            return <PlayerBox key={Index} id={element} indice={Index} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default GameLoby;

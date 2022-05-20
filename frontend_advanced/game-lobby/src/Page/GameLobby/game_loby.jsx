import PlayerBox from "./../../Components/PlayerBox/PlayerBox";
import React from "react";
import Container from "@material-ui/core/Container";
import "./game_loby.css";
import { useContext } from "react";
import ColorContext from "../../Context/ColorContext";
import NavBar from "../../Components/NavBar/NavBar";

const GameLoby = (props) => {
  const { users } = useContext(ColorContext);

  return (
    <div className="toproot">
      <NavBar />
      <Container>
        <div className="Container">
          <div className="top"></div>
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
    </div>
  );
};

export default GameLoby;

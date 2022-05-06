import { useMemo, useState } from "react";
import PlayerBox from "../PlayerBox/PlayerBox";
import React from "react";
import Container from "@material-ui/core/Container";
import Context from "../../Context/context";
import "./game_loby.css";

const GameLoby = (props) => {
  return (
    <Container>
      <div className="Container">
        <div>
          <h1>Game Lobby</h1>
        </div>
        <div>
          {[0, 1, 2, 3].map((element) => {
            return <PlayerBox key={element} id={element} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default GameLoby;

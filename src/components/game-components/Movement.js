import React, { useContext } from "react";

import * as Widget from "../StyledWidgets";
import { Howl } from 'howler';
import footStep from '../../sounds/footstep.wav'

// context
import { GameContext } from "../../contexts/game/GameContext";

const Movement = () => {
  const sound = new Howl({
    src: [footStep],
    volume: 0.3,
  });

  const { movePlayer } = useContext(GameContext);
  return (
    <Widget.MovementContainer>
      <Widget.MovementButton
        onClick={() => {
          movePlayer("n");
          sound.play()
        }}
        style={{gridArea: "north"}}
      >
        N
      </Widget.MovementButton>
      <Widget.MovementButton
        onClick={() => {
          movePlayer("s");
          sound.play()
        }}
        style={{gridArea: "south"}}
      >
        S
      </Widget.MovementButton>
      <Widget.MovementButton
        onClick={() => {
          movePlayer("e");
          sound.play()
        }}
        style={{gridArea: "east"}}
      >
        E
      </Widget.MovementButton>
      <Widget.MovementButton
        onClick={() => {
          movePlayer("w");
          sound.play()
        }}
        style={{gridArea: "west"}}
      >
        W
      </Widget.MovementButton>
    </Widget.MovementContainer>
  );
};

export default Movement;

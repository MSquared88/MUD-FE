import React, { useContext } from "react";

// context
import { GameContext } from "../../contexts/game/GameContext";

import { EnemyContainer, EnemyTitle, EnemyP, EnemyImg } from "../StyledWidgets";

import bat from "../../img/bat.jpg";
import ghost from "../../img/ghost.jpg";
import spider from "../../img/Phase_Spider.jpg";
import shrieker from "../../img/shrieker.jpg";
import bats from "../../img/bats.jpg";
import firBeetle from "../../img/fireBettle.jpeg"

export default function Enemy() {
  const { roomInfo } = useContext(GameContext);
  let img;
  if (roomInfo.enemy) {
    switch (roomInfo.enemy.name) {
      case "Ghost":
        img = ghost;
        break;
      case "Giant Bat":
        img = bat;
        break;
      case "Phase Spider":
        img = spider;
        break;
      case "Swarm of Bats":
        img = bats;
        break;
      case "Shrieker":
        img = shrieker;
        break;
      case "Giant Fire Beetle":
        img = firBeetle;
        break;
      default:
        img = null;
    }
  }

  return (
    <EnemyContainer>
      {roomInfo.enemy ? (
        <>
          <EnemyTitle>{roomInfo.enemy.name}</EnemyTitle>
          <EnemyP>{roomInfo.enemy.description}</EnemyP>
          <EnemyP>health: {roomInfo.enemy.hp}</EnemyP>
          <EnemyImg src={img}></EnemyImg>
        </>
      ) : (
        <span style={{color: 'white'}}>No Enemy in this room</span>
      )}
    </EnemyContainer>
  );
}

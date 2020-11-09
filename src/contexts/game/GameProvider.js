import React, { useState, useEffect } from "react";

//context
import { GameContext } from "./GameContext";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function GameProvider({ children }) {
  //state
  const [roomInfo, setRoomInfo] = useState({
    title: "",

    description: "",
    players: [],
    hp: 0,
    enemy: {
      name: '',
      hp: 0,
      description: ''
    }

  });

  const [gameOutput, setGameOutput] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/adv/init/")
      .then(res => {
        console.log("res from useEffect", res);
        setRoomInfo({ ...res.data });
      })
      .catch(err => {
        console.log("err from useEffect", err);
      });
    //   axios
    //   .get('https://build-week-mud.herokuapp.com/api/adv/init/', {headers: {
    //     "Content-Type": 'application/json',
    //     "Access-Control-Allow-Origin": "*",
    //     Authorization: `Token 0117760cc5b5e3ddb53ef9352e0504c879aeabd6`,
  }, []);
  const movePlayer = direction => {
    axiosWithAuth()
      .post("/api/adv/move/", { direction: direction })
      .then(res => {
        if(res.data.error_msg){
          setGameOutput([...gameOutput, res.data.error_msg])
        }
        else{
          console.log("from movement", res);
          setRoomInfo({ ...res.data, hp: roomInfo.hp });
          setGameOutput([])
        }
      })
      .catch(err => {
        console.log("from movement", err);
      });
  };

  const attack = () => {
    axiosWithAuth()
      .post("/api/adv/attack/")
      .then(res => {
        console.log("from attack then", res);
        setGameOutput([...gameOutput, res.data.message])
        if(res.data.enemy){
          setRoomInfo({...roomInfo, hp: res.data.player.hp, enemy:{...roomInfo.enemy, hp: res.data.enemy.hp}})
          console.log("from attack then", roomInfo);

        }
      })
      .catch(err => {
        console.log("from attack err", err);
      });
    };
  
  const chat = (msg) => {
    setGameOutput([...gameOutput, msg])
  }

  return (
    <>
      <GameContext.Provider
        value={{
          roomInfo,
          movePlayer,
          attack, 
          gameOutput, 
          chat
        }}
      >
        {children}
      </GameContext.Provider>
    </>
  );
}

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Room from "./Room";
import  { axiosWithAuth } from "../../utils/axiosWithAuth";

const Map = styled.div`
  position: relative;
  width: 730px;
  height: 840px;
  background: #2d2d2d;
  margin: 0 auto;
`;

export default function TileMap(props) {
  const [rooms, setRooms] = useState([])
  useEffect(()=> {
    axiosWithAuth()
    .get('api/adv/rooms/')
      .then((res) => {
        console.log('from tileMap', res)
        setRooms([...res.data])
      })
      .catch((err) => {
        console.log('from tileMap', err)
      })
  },[])


  let initialRoom = null;

  for (let room of rooms) {
    room.size = 50;
  }

  if (rooms.length > 0) {
    initialRoom = rooms[0];
    initialRoom.x = 200;
    initialRoom.y = 150;

    assignCoordinates();
  }

  function findById(id) {
    const foundRoom = rooms.find(room => room.id === id);
    return foundRoom;
  }

  function assignCoordinates() {
    const stack = [];
    console.log("STACK", stack);
    const visited = [];
    stack.push(rooms[0].id);

    while (stack.length) {
      console.log("STACK:", stack);
      let current = findById(stack.pop());
      console.log("CURRENT", current);
      console.log("VISITED:", visited);
      let north_id = current.n_to_id;
      let south_id = current.s_to_id;
      let east_id = current.e_to_id;
      let west_id = current.w_to_id;

      if (!visited.includes(current.id)) {
        if (north_id) {
          let north_room = findById(north_id);
          console.log("NORTH ROOM:", north_room);
          north_room.y = current.y - current.size;
          north_room.x = current.x;
          stack.push(north_id);
        }

        if (south_id) {
          let south_room = findById(south_id);
          console.log("SOUTH ROOM:", south_room);
          south_room.y = current.y + current.size;
          south_room.x = current.x;
          stack.push(south_id);
        }

        if (east_id) {
          let east_room = findById(east_id);
          console.log("EAST ROOM:", east_room);
          east_room.y = current.y;
          east_room.x = current.x + current.size;
          stack.push(east_id);
        }

        if (west_id) {
          let west_room = findById(west_id);
          console.log("WEST ROOM:", west_room);
          west_room.y = current.y;
          west_room.x = current.x - current.size;
          stack.push(west_id);
        }
        visited.push(current.id);
      }
    }
  }

  //   for (let i = 0; i < rooms.length; i++) {

  // }

  console.log("PLACED ROOMS", rooms);

  return (
    <Map>
      {rooms.map(room => (
        <Room {...room} key={room.id} />
      ))}
    </Map>
  );
}

/*
{
  id: 1
  title: "asd"
  description: "asdasd"
  n_to_id: null
  s_to_id: null
  e_to_id: null
  w_to_id: null
  inventory_id: 1
  enemy_id: 1
}
 */

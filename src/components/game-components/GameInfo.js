import React, { useContext, useState } from 'react'



//styles
import * as Widget from '../StyledWidgets'

//context 
import { GameContext } from '../../contexts/game/GameContext'

export default function GameInfo() {

    const [chatMsg, setChatMsg] = useState({msg: ''});
    const { roomInfo, gameOutput } = useContext(GameContext)

    const handleChanges = e => {
        setChatMsg({...chatMsg, [e.target.name]: e.target.value});
    };
    return (
        <Widget.GameInfoContainer>
            <Widget.RoomInfo>
                <Widget.RoomTitle>{roomInfo.title}</Widget.RoomTitle>
                <Widget.RoomDesc>{roomInfo.description}</Widget.RoomDesc>
            </Widget.RoomInfo>
            <Widget.GameOutput>
                {gameOutput.map(msg => {
                    return <p key={Date.now}><span style={{color: 'purple'}}> => </span>{msg}</p>
                })}
            </Widget.GameOutput>
            <Widget.GameInput
                type='text'
                name='msg'
                placeholder='Chat Here'
                value={chatMsg.msg}
                onChange={handleChanges}
            />
        </Widget.GameInfoContainer>
    )
}

import styled from 'styled-components';

// https://jsfiddle.net/MadLittleMods/r32rL/
const boxShadow = `
-moz-box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);
-webkit-box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);
box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);
`;

const font = "font-family: 'Metal Mania', cursive";

export const DisplayContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    width: 100%;
    height: 350px;
    background: #2d2d2d;
    ${boxShadow};
`;
export const MainGameContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 10px auto;
    ${boxShadow};
`;
export const StatsGameInfoInput = styled.div`
    width: 30%;
    height: 20%;
    ${boxShadow};
    background: #1a1a1a;
`;

export const GameControls = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 28%;
    height: 600px;
    background: #2c2c2c;
    ${boxShadow};
`;

export const Tracker = styled.div`
    width: 250px;
    height: 30px;
    background: rgb(35, 35, 35);
    border-radius: 10px;
    box-shadow: inset 0 - 5px #000;
`;

export const ProgressInTracker = styled.div`
    text-align: center;
    width: ${(props) => props.width};
    height: 100%;
    background: ${(props) => props.color};
    border-radius: 8px;
`;

export const GameInfoContainer = styled.div`
    text-align: center;
    width: 100%;
    height: 80%;
    background: #2d2d2d; ;
`;
export const GameInput = styled.input`
    width: 98%;
    color: white;
    height: 35px;
    background: black;
    font-size: 1.3rem;
`;

export const GameOutput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow-y: auto;
    width: 99%;
    color: white;
    height: 350px;
    background: black;
    font-size: 1.3rem;
    border-left: 2px solid gray;
    border-right: 2px solid gray;
`;

export const RoomInfo = styled.div`
    width: 100%;
    height: 280px;
    background: #2d2d2d;
    ${boxShadow};
`;
export const RoomTitle = styled.h1`
    font-size: 3rem;
    ${font};
    color: #9a0606;
`;

export const RoomDesc = styled.p`
    font-size: 1.4rem;
    color: white;
`;

export const GameActionsContainer = styled.div`
    display: flex;
    height: 40%;
    width: 48%;
    background: #1a1a1a;
    ${boxShadow};
`;

export const ActionButton = styled.button`
    height: 50px;
    width: 100%;
    border: none;
    background-color: #2c2c2c;
    ${boxShadow};
    color: red;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    outline: none;

    &:active {
        box-shadow: none;
        transform: translateY(4px);
    }
`;

export const PlayersContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
    width: 48%;
    overflow-y: auto;
    ${boxShadow};
    background: #1a1a1a;
`;

export const Player = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 98%;
    background: #2c2c2c;
    ${boxShadow};
    h2 {
        color: white;
        font-size: 1.3rem;
    }
`;
export const MovementContainer = styled.div`
    width: 100%;
    ${boxShadow};
    background: #1a1a1a;
    display: grid;
    grid-template-columns: 23% 100px 100px 100px 20%;
    grid-template-rows: 80px 80px 80px;
    grid-template-areas:
        '. . north .'
        ' . west . east'
        '. . south .';
    align-self: center;
`;

export const MovementButton = styled.button`
    font-size: 12px;
    border-radius: 50%;
    padding: 8px 8px;
    width: 70px;
    border: none;
    color: red;
    font-size: 1.5rem;
    height: 70px;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #2c2c2c;
    outline: none;
    ${boxShadow};
    ${font};

    &:active {
        box-shadow: none;
        transform: translateY(4px);
    }
`;
export const EnemyContainer = styled.div`
    width: 100%;
    height: 360px;
    background: #1c1c1c;
    ${boxShadow}
`;
export const EnemyTitle = styled.h2`
    ${font};
    color: purple;
    font-size: 3rem;
`;
export const EnemyP = styled.p`
    color: white;
`;

export const EnemyImg = styled.img`
    object-fit: contain;
    width: 250px;
    height: 160px;
`;

//AppRouter
export const Nav = styled.div`
    background-color: #0a235c;
    height: 75px;
    ${boxShadow};
    background: #1c1c1c;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    a {
        text-decoration: none;
        color: #f0f0f0;
        font-size: 18px;
        cursor: pointer;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
    }
`;

//Registration
export const RegisterForm = styled.div`
    background-image: linear-gradient(to top, rgba(157,0,0, 0), rgba(157,0,1));
    }
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 70px;
    border: 2px solid #E3E1E1;
    border-radius: 12px;
    box-shadow: 5px 5px 8px #BFBFBF;
    width: 30%;
    min-width: 300px;
    align-items: center;
    height: 360px;
    display: flex;
    justify-content: center;
    @media (max-width: 500px) {
        
        
    }
`;

export const Context = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 25px;
    margin-top: 50px;
    color: #ffffff;
    @media (max-width: 500px) {
    }

    .registration-form {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        margin-left: 10px;
        width: 200px;

        label {
            color: #ffffff;
            margin-bottom: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
`;

export const RegisterBtn = styled.button`
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;
    padding: 8px 8px;
    width: 40%;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #ffffff;
    color: #202020;
`;

//Login
export const LoginForm = styled.form`
    background-image: linear-gradient(to top, rgba(157,0,0, 0), rgba(157,0,1));
    }
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 70px;
    border: 2px solid #E3E1E1;
    border-radius: 12px;
    box-shadow: 5px 5px 8px #BFBFBF;
    width: 30%;
    min-width: 300px;
    align-items: center;
    height: 360px;
    display: flex;
    justify-content: center;
    @media (max-width: 500px) {
        
        
    }
`;

export const LoginContext1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 25px;
    margin-top: 10px;
    color: #ffffff;
    @media (max-width: 500px) {
    }

    .login-form {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        margin-left: 10px;
        width: 200px;

        label {
            color: #ffffff;
            margin-bottom: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
`;

export const LoginBtn = styled.button`
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;
    padding: 8px 8px;
    width: 40%;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #ffffff;
    color: #202020;
`;

export const LoginHeader = styled.h1`
    font-size: 25px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;
`;

//WelcomePage
export const WelcomeImage = styled.div`
    img {
        margin-top: 80px;
    }
`;

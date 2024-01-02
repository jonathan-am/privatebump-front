import React from 'react';
import './Style.modules.css';
import { useNavigate } from 'react-router-dom';

function Game(props) {

    const navigate = useNavigate();

    const handleNavigate = ()=> {
        return navigate("/game/"+props.game_id);
    }

    return (
        <div onClick={handleNavigate} className='game-info'>
            <img alt="Imagem" src={props.src}/> 
            <div className='information'>
                <p>PGR - {props.percentage}%</p>
            </div>
        </div>        
    );
}


export default Game;
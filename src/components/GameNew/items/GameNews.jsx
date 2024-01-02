import React from 'react';
import './Style.modules.css';

function GameNew(props){
    return (
        <div className='game-new'>
            <span>Usuario: {props.user}</span>
            <p>{props.new}</p>
        </div>
    );
}

export default GameNew;
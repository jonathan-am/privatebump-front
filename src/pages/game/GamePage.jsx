import React, { useEffect, useState } from 'react';
import './Styles.modules.css';
import GameNewsComponent from '../../components/GameNew/GameNewsComponent';
import loading from '../../assets/4d3e7b98dca300caa3365ea6870c8e3d_w200.gif';
import HeaderComponent from '../../components/Header/HeaderComponent';
import FooterComponent from '../../components/Footer/FooterComponent';
import { useParams } from 'react-router-dom';
import { useCookies } from "react-cookie";
import getGameHackInfo from '../../client/RequestGameHackInfo';
import getCurrentGameInformation from '../../client/RequestGameInformation';
import requestPlataformList from '../../client/RequestPlataformList';

function GamePage() {
  const [cookies, removeCookie] = useCookies(["session", "plataform"]);
  const session = cookies['session'];
  const plataform = cookies['plataform'];

  const { game_id } = useParams();

  const [gameInfo, setGameInfo] = React.useState({
    "game_title": "-",
    "game_plxr": "-",
    "game_rounds": ["-"],
    "global_atack": "-"
  });

  const [plataformList, setPlataformList] = useState([{
    "plataform_id": 1,
    "plataform_title": "-",
    "plataform_logo": "-"
  }]);

  const [currentGameInfo, setCurrentGameInfo] = React.useState({
    game_url: "-"
  });

  useEffect(() => {
    requestPlataformList(session, setPlataformList, removeCookie);
    getCurrentGameInformation(session, plataform, game_id, setCurrentGameInfo, removeCookie);
  }, [session, plataform, game_id, setCurrentGameInfo]);

  function performHack() {
    getGameHackInfo(setGameInfo, game_id, session, removeCookie);
  }

  return (
    <div className="game-page">
      <HeaderComponent />
      <main className="game-page-app-main">
          {/*<GameNewsComponent />*/}
          <div className='current-game'>
          <div className='current-game-information'>
            <div className='current-game-information-title'>
              <p>Jogo Atual</p>
              <p>PLXR</p>
              <p>Jogadas</p>
            </div>
            <div className='current-game-information-values'>
              <p>{gameInfo.game_title}</p>
              <p>{gameInfo.game_plxr}</p>
              <div className='rounds'>
                {gameInfo.game_rounds.map((v) => (
                  <p>{v}</p>
                ))}
              </div>
            </div>
            <div className='global-atack-current-time'>Ataque em massa na PG Soft, as {gameInfo.global_atack} horas.</div>
            <div className='load-game-info'>
              <img className='loading-game-information-logo' src={loading} alt='Loading...' />
              <button className='update-current-game-information' onClickCapture={performHack}>Hackear</button>
            </div>
          </div>
          <div className='current-game-frame'>
            <p>{plataformList.map((z) => z.plataform_id === plataform ? z.plataform_title : '')}</p>
            <iframe src={currentGameInfo.game_url} frameBorder="0" allowfullscreen="true" />
          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export default GamePage;

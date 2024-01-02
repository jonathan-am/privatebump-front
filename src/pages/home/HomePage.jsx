import React, { useEffect, useState } from 'react';
import './Styles.modules.css';
import HeaderComponent from '../../components/Header/HeaderComponent';
import GameNewsComponent from '../../components/GameNew/GameNewsComponent';
import FooterComponent from '../../components/Footer/FooterComponent';
import Game from '../../components/Game/Game';
import requestGameList from '../../client/RequestGameList';
import { useCookies } from "react-cookie";
import requestPlataformList from '../../client/RequestPlataformList';

function HomePage() {
  const [gameList, setGameList] = useState([]);
  const [plataformList, setPlataformList] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["session", "plataform"]);
  const session = cookies['session'];
  const plataform = cookies['plataform'];

  useEffect(() => {
    async function fetchData() {
      await requestPlataformList(session, setPlataformList, removeCookie);
      await requestGameList(session, setGameList, removeCookie);
    }
    fetchData();
  }, [session, setGameList, setPlataformList]);

  function definePlataform(plataformId){
    setCookie("plataform", plataformId);
  }

  function removePlataform() {
    removeCookie("plataform", { path: '/' });
  }

  return (
    <div className="App">
      <HeaderComponent />
      <main className="App-main">
        {plataform === null || plataform===undefined || plataformList.length===0 ? (
          <div className='plataform-selector' >
            {plataformList.map((x)=> (
              <div onClick={()=> definePlataform(x.plataform_id)}>
                <img src={x.plataform_logo} alt={x.plataform_title}/>
              </div>
            ))}
          </div>): (<div>
            {/*<GameNewsComponent />*/}
            <div className='current-plataform'>
              <span>Plataforma Atual: <b>{plataformList.find((v)=> v.plataform_id===plataform).plataform_title}</b></span>
              <p onClickCapture={()=>removePlataform()}>Alterar plataforma</p>
            </div>
            <div className='game-list'>
              {gameList.map((v)=>(
                <Game key={v.game_title} src={v.image_url} game_id={v.game_id} percentage={v.percentage} />
              ))}
            </div>
            <div className='plataform-frame'>
                <iframe src={plataformList.find((v)=> v.plataform_id===plataform).plataform_url} allowfullscreen="true"/>
            </div>
          </div>
          )
        }
      </main>
      <FooterComponent />
    </div>
  );
}

export default HomePage;

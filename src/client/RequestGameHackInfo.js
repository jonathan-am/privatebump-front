import axios from "axios";

export default function getGameHackInfo(setGameInfo, game_id, session, removeCookie) {
  axios.get(`https://hackdapg.com.br:3303/game/info/${game_id}`, { headers: { "sessionid": session } }).then((response) => {
    setGameInfo(response.data);
  }).catch(error => {
    console.log(error.message);
    if(error.response.status === 402) {
      window.location.replace("/profile");
  }else if (error.response.status === 401) {
    removeCookie("session", { path: '*', domain: 'https://hackdapg.com.br' });
      window.location.replace("/");
    }
  });
}
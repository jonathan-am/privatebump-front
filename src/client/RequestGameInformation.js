import axios from "axios";

export default function getCurrentGameInformation(session, plataform, game_id, setCurrentGameInfo, removeCookie) {
  axios.get(`https://hackdapg.com.br:3303/currentgame/info/${game_id}`, { headers: { "sessionid": session, "plataformid": plataform } }).then((response) => {
    setCurrentGameInfo(response.data);
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
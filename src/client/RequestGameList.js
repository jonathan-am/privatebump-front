import axios from 'axios';

export default async function requestGameList(session, setGameList, removeCookie) {
  await axios.get(`https://hackdapg.com.br:3303/game/list`, { headers: { "sessionid": session } }).then((response) => {
    setGameList(response.data);
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
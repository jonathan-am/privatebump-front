import axios from "axios";

export default function getLastGameNews(session, setNews, removeCookie) {
    axios.get(`https://hackdapg.com.br:3303/game/news`, { headers: { "sessionid": session }}).then((response) => {
        setNews(response.data);
    }).catch(error => {
        console.log(error.message)
        if(error.response.status === 402) {
            window.location.replace("/profile");
        }else if(error.response.status === 401) {
            removeCookie("session", { path: '*', domain: 'https://hackdapg.com.br' });
            window.location.replace("/");
        }
     });
}
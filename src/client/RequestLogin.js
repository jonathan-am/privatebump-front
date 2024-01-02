import axios from 'axios';

export default async function requestLogin(username, password, setCookie) {
    await axios.post(`https://hackdapg.com.br:3303/v1/user/login`, {"login": username, "password": password}).then((response) => {
        window.alert("Successo!");
        setCookie("session", response.data.sessionId);
        window.location.replace("/")
    }).catch((error)=> {
        window.location.replace("/login")
    });
}
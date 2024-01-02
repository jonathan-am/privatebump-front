import axios from "axios";

export default async function performRegister(user) {
    await axios.post(`https://hackdapg.com.br:3303/v1/user`, user).then((response) => {
        window.alert("Successo!");
        window.location.replace("/login");
    }).catch(error=> {
        console.log(error.message);
        if(error.response.data.status === "400") {
            window.alert("Este usuario ja existe.");
        }else {
            window.alert("Erro ao criar usuario, tente novamente mais tarde!");
        }
    });
}
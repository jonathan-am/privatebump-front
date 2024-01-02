import axios from "axios";

export default function getUserInformation(setUser, session) {
    if(session!==null && session!==undefined) {
        const id = session.split(":")[0];
        axios.get(`https://hackdapg.com.br:3303/v1/user/${id}`, { headers: { "sessionid": session }}).then((response)=> {
            if(response.status === 200) {
                setUser(response.data);
            }
        }).catch(error => {
            console.log(error.message);
            if(error.response.status === 401) {
                window.location.replace("/login");
            }
        });
    }
}
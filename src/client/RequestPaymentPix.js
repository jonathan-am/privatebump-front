import axios from "axios";

export default function getPaymentPix(session, setPayment) {
    if (session !== null && session !== undefined) {
        const id = session.split(":")[0];
        axios.post("https://hackdapg.com.br:3303/v1/payment", { id: id }, { headers: { "sessionid": session } }).then((response) => {
            setPayment(response.data);
        }).catch(error => {
            console.log(error.message)
            if (error.response.status === 400) {
                window.location.replace("/");
            }else if (error.response.status === 401) {
                window.location.replace("/login");
            }
        });
    }
}
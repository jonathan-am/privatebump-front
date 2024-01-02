
import { useState, useEffect } from "react";
import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "./Styles.modules.css";
import { useCookies } from "react-cookie";
import getUserInformation from "../../client/RequestUserInformation";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const [cookies] = useCookies(["session"]);
    const session = cookies['session'];
    const navigate = useNavigate();

    const [user, setUser] = useState({
        "id": "-",
        "username": "-",
        "login": "-",
        "email": "-",
        "type": "-"
    });

    const handleNavigateToPayment = () => {
        return navigate("/payment");
    }

    useEffect(() => {
        getUserInformation(setUser, session);
    }, [setUser, session]);

    return (
        <div className="profile-app">
            <HeaderComponent />
            <div className="profile-app-main">
                <div className="profile-information">
                    <div>
                        <span>Username:</span>
                        <p>{user.username}</p>
                    </div>
                    <div>
                        <span>Login:</span>
                        <p>{user.login}</p>
                    </div>
                    <div>
                        <span>Email:</span>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <span>CPF:</span>
                        <p>{user.id}</p>
                    </div>
                    <div>
                        <span>Grupo Atual:</span>
                        <p>{user.type}</p>
                    </div>
                    {/*<button className="profile-vip-redirect" onClickCapture={handleNavigateToPayment}>Comprar VIP</button>*/}
                    <div className="terms">
                        <span className="aviso">*** Aviso ***</span>
                        <span>Tenha ciência de que a PrivateBump não se responsabiliza por prejuizos em nenhuma plataforma de aposta. </span>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}

export default ProfilePage;

import requestLogin from '../../client/RequestLogin';
import FooterComponent from '../../components/Footer/FooterComponent';
import './Styles.modules.css';
import { useState } from "react";
import { useCookies } from "react-cookie";


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [cookies, setCookie] = useCookies(["session"]);

  const handleLogin = () => {
    if((username!==null && username!==undefined && username.length > 0) && (password!==null && password!==undefined && password.length > 0)) {
      console.log("starting loging...")
       requestLogin(username, password, setCookie, cookies);
    }
  };

  const performRegisterNavigate = () => {
    window.location.replace("/register");
  }

  return (
    <div className='login-app'>
      <div className="header-container">
        <header>
          <h1>Private Bump</h1>
        </header>
      </div>
      <div className="login-container">
        <div className="content">
          <h2>Login</h2>
          <form>
            <label htmlFor="username">
              <i className="fas fa-user"></i> Nome de usuário:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">
              <i className="fas fa-lock"></i> Senha:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='register'>
              <span onClickCapture={performRegisterNavigate}>Cadastre um novo usuario</span>
            </div>
            <button type="button" onClick={handleLogin}>
              Login <i className="fas fa-sign-in-alt"></i>
            </button>
          </form>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default LoginPage;

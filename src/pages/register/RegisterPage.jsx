// RegisterComponent.jsx

import React, { useState } from 'react';
import './Styles.modules.css';
import FooterComponent from '../../components/Footer/FooterComponent';
import performRegister from '../../client/RequestRegisterUser';

const RegisterPage = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    performRegister({"id": cpf.replace(".", "").replace("-", ""), "email": email, "login": usuario, "password": senha});
  };

  const performLoginNavigate = () => {
    window.location.replace("/login");
  }

  return (
    <div className='register-app'>
      <div className="header-container">
        <header>
          <h1>Private Bump</h1>
        </header>
      </div>
      <div className="form-container">
        <div className="pageTitle">
          <h2>Cadastrar novo Usuário</h2>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Usuário:</label>
              <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            </div>
            <div>
              <label>Senha:</label>
              <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>CPF:</label>
              <input type="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </div>
            <div className='login-redirect'>
              <span onClickCapture={performLoginNavigate}>Usuario ja cadastrado?</span>
            </div>
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default RegisterPage;

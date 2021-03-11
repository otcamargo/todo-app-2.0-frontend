import React, { ChangeEvent, FormEvent, useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { login } from '../../services/auth';

import './styles.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [loginMessage, setLoginMessage] = useState({ success: "", error: "" });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // TODO: check if this is really necessary
    const { username, password } = formData;

    if (!username || !password) {
      setLoginMessage({ success: "", error: "Preencha e-mail e senha para continuar!" });
      alert(loginMessage.error);
    } else {
      try {
        const res = await api.post('/auth/login', formData).then(res => res.data);
        login(res.token);
      } catch (err) {
        setLoginMessage({ success: "", error:"Houve um problema com o login, verifique suas credenciais" });
        alert(loginMessage.error);
      }
    }
  }

  return (
    <div id="page-login">
      <div className="content">
        <header>
          <p>TODO APP 2.0</p>
        </header>

        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <h1>Faça login ou crie uma conta</h1>

            <fieldset>
              <div className="field">
                <label htmlFor="username">Nome de usuário</label>
                <input type="text" name="username" id="username" onChange={handleInputChange}/>
              </div>
              <div className="field">
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" onChange={handleInputChange}/>
              </div>

              <button type="submit">
                Fazer login
              </button>
            </fieldset>
          </form><br/>
          <div className="signup-link">
            <Link to="/signup">
              <strong>Criar conta </strong>
              <span>
                <FiLogIn />
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login;

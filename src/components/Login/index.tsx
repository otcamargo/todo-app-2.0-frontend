import React, { ChangeEvent, FormEvent, useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // TODO: check if this is really necessary
    const { username, password } = formData;

    const res = await api.post('/auth/login', formData).then(res => res.data);
    alert('Login efetuado!');
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
          <div className="create-account-link">
            <Link to="/create-account">
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

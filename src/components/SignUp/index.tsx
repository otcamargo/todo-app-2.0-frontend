import React, { ChangeEvent, FormEvent, useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

const SignUp = () => {
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
    const data = {
      username,
      password,
      role: "ADMIN"
    }

    const res = await api.post('/user', data).then(res => res.data);
    alert('Conta criada!');
  }

  return (
    <div id="page-signup">
      <div className="content">
        <header>
          <p>TODO APP 2.0</p>
        </header>

        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <h1>Crie sua conta</h1>

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
                Criar conta
              </button>
            </fieldset>
          </form><br/>
          <div className="login-link">
            <Link to="/login">
              <strong>Já tem uma conta? Faça login! </strong>
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

export default SignUp;

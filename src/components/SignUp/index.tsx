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

  const [signUpMessage, setSignUpMessage] = useState({ success: "", error: "" });

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
    };

    if (!username || !password) {
      setSignUpMessage({ success: "", error: "Preencha todos os dados para se cadastrar"});
      alert(signUpMessage.error);
    } else {
      try {
        const res = await api.post('/user', data).then(res => res.data);
        setSignUpMessage({ success: "Conta criada com sucesso!", error: ""});
        alert(signUpMessage.success);
      } catch (err) {
        setSignUpMessage({ success: "", error: "Ocorreu um erro ao registrar sua conta"});
        alert(signUpMessage.error);
      }
    }
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
            <Link to="/">
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

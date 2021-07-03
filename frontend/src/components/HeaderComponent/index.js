import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import '../../assets/styles/header.css';

function HeaderComponent({ loggedName }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleLogOut() {
    localStorage.setItem('name', '');
    localStorage.setItem('email', '');
    localStorage.setItem('phone', '');
    localStorage.setItem('cpf', '');
    history.push('/');
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formData = {
        email,
        password,
      };

      await api.post('clientes/exists', formData);

      const { data } = await api.get(`/clientes/email/${email}`);

      localStorage.setItem('name', data[0].name);
      localStorage.setItem('email', data[0].email);
      localStorage.setItem('phone', data[0].phone);
      localStorage.setItem('cpf', data[0].cpf);

      history.push('/dashboard');
    } catch (error) {
      alert('Houve uma falha no login!');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="header">
      <h1 id="header-title">Cabeleleila Leila</h1>
      <div id="login-component">
        {loggedName ? (
          <div id="welcome-message">
            <h4>Olá, {loggedName}</h4>
            <button onClick={handleLogOut} type="button">Sair</button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                value={email}
                required
                placeholder="email@domain.com"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                required
                placeholder="senha"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button disabled={loading} id="submit" type="submit">Entrar</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default HeaderComponent
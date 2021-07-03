import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import '../../assets/styles/registerForm.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if(loading) return;
    setLoading(true);

    const clientPayload = {
      name,
      email,
      phone,
      cpf,
      password
    };

    try {
      await api.post('/clientes', clientPayload);
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    } catch (err) {
      alert('Houve uma falha no cadastro!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="register-form">
      <h1 id="header-title">Venha ser um cliente leila!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Número de celular</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          name="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input          
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} type="submit">Registrar</button>
      </form>
    </div>
  )
}

export default RegisterForm;
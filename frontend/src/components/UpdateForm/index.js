import React, { useState } from 'react';

import api from '../../services/api';
import '../../assets/styles/registerForm.css';

function UpdateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if(loading) return;
    setLoading(true);

    const clientPayload = {
      name,
      email,
      phone,
      cpf: localStorage.getItem('cpf'),
      password
    };

    try {
      await api.put('/clientes', clientPayload);

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('phone', phone);

      alert('Cadastro atualizado com sucesso!');
    } catch (err) {
      alert('Houve uma falha na atualização do cadastro!');
    } finally {
      setLoading(false);
      window.location.reload(); 
    }
  };

  return (
    <div id="register-form">
      <h1 id="header-title">Atualização de cadastro</h1>
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
        <label htmlFor="password">Senha</label>
        <input          
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} type="submit">Atualizar</button>
      </form>
    </div>
  )
}

export default UpdateForm;
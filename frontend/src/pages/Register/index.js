import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import logo from "../../assets/logo.svg";

import "./styles.css";

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };
    try {
      const response = await api.post("ongs", data);
      alert(`Seu ID de acesso: ${response.data.id}. Guarde-o para fazer login`);

      history.push("/");
    } catch (err) {
      alert("Erro ao realizar o cadastro, tente novamente");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadatro, entre na plataforma e ajude pessoas a encontrarem
            casos da sua ONG
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome da ONG"
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="Whatsapp"
          />

          <div className="input-group">
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade"
            />
            <input
              value={uf}
              onChange={e => setUf(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import logo from "../../assets/logo.svg";

import "./styles.css";

export default function Register() {
  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  async function handleNewIncident(event) {
    event.preventDefault();
    const data = {
      title,
      description,
      value
    };
    console.log(data);
    try {
      const response = await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      alert("Caso cadastrado com sucesso.");

      history.push("/profile");
    } catch (error) {
      alert("Erro ao cadastrar caso, tente novamente");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Logo" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um heroi para resolver
            isso
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

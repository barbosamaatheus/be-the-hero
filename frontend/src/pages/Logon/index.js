import React from "react";
import { useHistory } from "react-router-dom";

import FacebookLogin from "react-facebook-login";

import api from "../../services/api";

import logo from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";

import "./styles.css";

export default function Logon() {
  const history = useHistory();

  const responseFacebook = async (response) => {
    const { name, email, location, error } = response;

    const data = {
      name,
      email,
      city: location.name,
    };

    try {
      const apiResponse = await api.post("ongs", data);

      localStorage.setItem("ongId", apiResponse.data.id);
      localStorage.setItem("ongName", apiResponse.data.name);

      if (!error) history.push("/profile");
    } catch (err) {
      alert("Erro ao fazer login, tente novamente.");
    }
  };

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Logo" />

        <form>
          <h1>Faça seu logon</h1>
          <FacebookLogin
            appId="190575558582526" //APP ID NOT CREATED YET
            fields="name,email,location"
            scope="public_profile,email,user_location"
            callback={responseFacebook}
          />
        </form>
      </section>

      <img src={heroesImage} alt="Heroes" />
    </div>
  );
}

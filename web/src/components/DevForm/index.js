import React, { useState, useEffect } from "react";
import "./styles.css";

function DevForm({ onSubmit }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      { timeout: 30000 }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername("");
    setTechs("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          onChange={e => {
            setGithubUsername(e.target.value);
          }}
          name="github_username"
          id="github_username"
          value={github_username}
          required
        ></input>
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          onChange={e => {
            setTechs(e.target.value);
          }}
          name="techs"
          id="techs"
          value={techs}
          required
        ></input>
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            onChange={e => {
              setLatitude(e.target.value);
            }}
            type="number"
            name="latitude"
            id="latitude"
            required
            value={latitude}
          ></input>
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            onChange={e => {
              setLongitude(e.target.value);
            }}
            type="number"
            name="longitude"
            id="longitude"
            required
            value={longitude}
          ></input>
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default DevForm;

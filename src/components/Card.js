import React from "react";
import Favori from "./Favori";
import "./Card.css";

function Card(props) {
  const { url, titre } = props;
  // const url = props.url
  // const titre = props.titre
  return (
    <div class="card">
      <Favori></Favori>
      {url && (
        <a href="#" class="picture">
          <img src={url} alt="" />
        </a>
      )}
      <h2>
        <a href="#">{titre}</a>
      </h2>
      <p class="price">Pour les débutants</p>
      <p class="location">Paris 75009</p>
    </div>
  );
}
export default Card;

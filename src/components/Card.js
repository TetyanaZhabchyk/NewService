import React from "react";
import Favori from "./Favori";
import "./Card.css";

function Card(props) {
  return (
    <div class="card">
      <Favori></Favori>
      <a href="#" class="picture">
        <img src={props.url} alt="" />
      </a>
      <h2>
        <a href="#">{props.titre}</a>
      </h2>
      <p class="price">Pour les débutants</p>
      <p class="location">Paris 75009</p>
    </div>
  );
}
export default Card;

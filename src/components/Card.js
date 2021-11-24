import React from "react";
import Favori from "./Favori";
import "./Card.css";

function Card(props) {
  const { url, titre, price } = props;
  // const url = props.url
  // const titre = props.titre
  return (
    <div className="card">
      <Favori></Favori>
      {url && (
        <a href="#" class="picture">
          <img src={url} alt="" />
        </a>
      )}
      <h2>
        <a href="#">{titre}</a>
      </h2>
      <p className="price">{price}</p>
      <p className="location">Paris 75009</p>
    </div>
  );
}
export default Card;

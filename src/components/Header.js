import Favori from "./Favori";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header>
      <div className="line">
        <h1>
          <Link to="/">Le bon service</Link>
        </h1>
        <p>Echange de Services entre particuliers</p>
        <h1 className="logo">
          <img src="/images/html.png" alt="" />
        </h1>
        <form>
          <input type="search" name="q" placeholder="Rechercher" />
          <input type="submit" value="Lancer" />
        </form>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Loisir</a>
          </li>
          <li>
            <a href="./index.html">Sport</a>
          </li>
          <li>
            <a href="#">Covoiturage</a>
          </li>
          <li>
            <a href="#">Autre</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;

import Favori from "./Favori";
import React from "react";
import "./Header.css";
function Header() {
  return (
    <header>
      <div class="line">
        <h1>Le bon service</h1>
        <p>Echange de Services entre particuliers</p>
        <h1 class="logo">
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

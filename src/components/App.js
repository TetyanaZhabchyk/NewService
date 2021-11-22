import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  //declanche renouvellement d'affichage
  let [cards, setCards] = useState([]);

  //1fois outilisation -import react
  useEffect(() => {
    //recupere json et fait promesse (donees =data)
    fetch("http://localhost:3001/cards.json")
      .then((response) => response.json())
      .then((data) => {
        setCards(data.cards);

        // POURQUOI en Boucle ?
        console.log("fetch");
      });
    //tab de depandancevide (1fois execution) 1fois pour composant qu'on charge
    //17mlsec ...2sec
  }, []);
  // input en bootstrap react ???
  return (
    <body>
      <Header></Header>
      <main>
        <aside>
          <input type="text" />
          <button>Details</button>
        </aside>
        <article>
          <Card url="images/anglais.jpeg" titre="Cours d'anglais"></Card>
          <Card url="images/musee.png"></Card>
          <Card url="images/python.png"></Card>
        </article>
      </main>
      <Footer></Footer>
    </body>
  );
}

export default App;

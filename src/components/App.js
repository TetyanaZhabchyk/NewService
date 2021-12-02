import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Categories from "./Categories";
import { Link } from "react-router-dom";
function App() {
  //declanche renouvellement d'affichage
  let [cards, setCards] = useState([]);

  //1fois outilisation -import react
  useEffect(() => {
    //recupere json et fait promesse (donees =data)
    fetch("http://localhost:3000/data/cards.json")
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
        <Categories></Categories>

        <article>
          {
            //objet element contient body
            cards.map((element, index) => (
              <Card
                key={index}
                url={element.url}
                titre={element.title}
                price={element.price}
              />
            ))
          }
        </article>
      </main>
      <Footer></Footer>
    </body>
  );
}

export default App;

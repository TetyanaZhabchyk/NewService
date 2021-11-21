import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <body>
      <header>
        <div class="line">
          <h1>Le bon service</h1>
          <p>Echange de Services entre particuliers</p>
          <h1 class="logo">
            <img src="textencouleur.JPG" alt="" />
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
      <main>
        <aside>
          <input type="text" />
          <button>Details</button>
        </aside>
        <article>
          <Card></Card>
          <h1>titre de l'article</h1>
          <p></p>
          <p></p>
        </article>
      </main>
      <footer></footer>
    </body>
  );
}

export default App;

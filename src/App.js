import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import Header from "./Header";
function App() {
  return (
    <body>
      <Header></Header>
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

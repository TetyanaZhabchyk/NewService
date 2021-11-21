import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
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
      <Footer></Footer>
    </body>
  );
}

export default App;

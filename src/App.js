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
          <Card url="/images/anglais.jpeg" titre="Cours d'anglais"></Card>
          <Card url="musee.png"></Card>
          <Card url="python.png"></Card>
        </article>
      </main>
      <Footer></Footer>
    </body>
  );
}

export default App;

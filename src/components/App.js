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

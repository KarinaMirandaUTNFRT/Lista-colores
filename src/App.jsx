import Footer from "./components/Footer";
import FormularioColor from "./components/FormularioColor";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="container my-3">
        <h1 className="text-center">Administrar Colores</h1>
        <div>
          <FormularioColor></FormularioColor>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;

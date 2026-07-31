import Footer from "./components/Footer";
import FormularioColor from "./components/FormularioColor";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/> 
      <main className="container my-4">
        <h1 className="text-center mb-3">Elige un Color</h1>
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {[
            "rojo",
            "azul",
            "verde",
            "amarillo",
            "negro",
            "blanco",
            "violeta",
            "rosa",
            "naranja",
            "gris",
            "marron",
            "morado",
            "celeste",
            "turquesa",
          ].map((color) => (
            <span
              key={color}
              className="badge bg-secondary text-capitalize px-3 py-2 fw-normal"
              style={{ fontSize: "0.85rem", opacity: 0.85 }}
            >
              {color}
            </span>
          ))}
        </div>
        <FormularioColor/> 
      </main>
      <Footer/>    
    </>
  );
}

export default App;

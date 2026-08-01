import Footer from "./components/Footer";
import FormularioColor from "./components/FormularioColor";
import Navbar from "./components/Navbar";

function App() {
  const traductorColores = {
    rojo: "red",
    azul: "blue",
    verde: "green",
    amarillo: "yellow",
    negro: "black",
    blanco: "white",
    violeta: "violet",
    rosa: "pink",
    naranja: "orange",
    gris: "gray",
    marron: "brown",
    morado: "purple",
    celeste: "skyblue",
    turquesa: "turquoise",
  };

  const listaSugerencias = [
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
  ];
  return (
    <>
      <Navbar />
      <main className="container my-4">
        <h1 className="text-center mb-3">Agrega un color a la paleta </h1>
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {listaSugerencias.map((color) => {
            const colorCSS = traductorColores[color] || color;

            const esClaro = ["amarillo", "blanco", "celeste", "rosa"].includes(
              color,
            );

            return (
              <span
                key={color}
                className={`badge  text-capitalize px-3 py-2 fw-semibold ${
                  esClaro ? "text-dark" : "text-white"
                }`}
                style={{
                  background: colorCSS, 
                  fontSize: "0.85rem",
                  border: color === "blanco" ? "1px solid #6c757d" : "none",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                {color}
              </span>
            );
          })}
        </div>
        <FormularioColor />
      </main>
      <Footer />
    </>
  );
}

export default App;

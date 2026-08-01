import { useEffect, useState } from "react";
import ListaColor from "./ListaColor";

const API_URL = "http://localhost:4000/api/colores";

const FormularioColor = () => {
  const [arrayColores, setArrayColores] = useState([]);
  const [color, setColor] = useState("");
  const [colorEditando, setColorEditando] = useState(null); 

 
  const obtenerColoresAPI = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (res.ok) {
        setArrayColores(data);
      }
    } catch (error) {
      console.error("Error al obtener colores:", error);
    }
  };

  useEffect(() => {
    obtenerColoresAPI();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nombreLimpio = color.trim();
    if (nombreLimpio === "") return;

    try {
      if (colorEditando) {
        
        const res = await fetch(`${API_URL}/${colorEditando._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nombreColor: nombreLimpio }),
        });

        if (res.ok) {
          setColorEditando(null);
          setColor("");
          obtenerColoresAPI();
        } else {
          alert("Error al actualizar el color");
        }
      } else {
        
        const existe = arrayColores.some(
          (c) => c.nombreColor.toLowerCase() === nombreLimpio.toLowerCase()
        );
        if (existe) {
          return alert("El color ya existe en la lista");
        }

        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nombreColor: nombreLimpio }),
        });

        if (res.ok) {
          setColor("");
          obtenerColoresAPI(); 
        } else {
          alert("Error al guardar el color en la base de datos");
        }
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

 
  const borrarColor = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
       
        obtenerColoresAPI();
      } else {
        alert("No se pudo eliminar el color");
      }
    } catch (error) {
      console.error("Error al borrar:", error);
    }
  };

 
  const prepararEdicion = (colorObjeto) => {
    
    setColorEditando(colorObjeto);
    setColor(colorObjeto.nombreColor);
  };

  
  const cancelarEdicion = () => {
    setColorEditando(null);
    setColor("");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            type="text"
            className="form-control"
            id="inputColor"
            placeholder="Ingresa el nombre de un color de la lista"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <button
            className={`btn ${
              colorEditando ? "btn-warning" : "btn-primary"
            } ms-2`}
          >
            {colorEditando ? "Guardar" : "Agregar"}
          </button>

          {colorEditando && (
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={cancelarEdicion}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      
      <ListaColor
        arrayColoresProps={arrayColores}
        borrarColorProps={borrarColor}
        onEditColorProps={prepararEdicion}
      />
    </section>
  );
};

export default FormularioColor;
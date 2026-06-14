import { useState } from "react";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  const [arrayTareas, setarrayTareas] = useState([])
  const [ tarea, setTarea] = useState('')

  return (
    <section>
      <form>
        <div className="mb-3 d-flex ">
          <input
            type="text"
            className="form-control"
            id="inputTarea"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
          />
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
      <ListaTarea></ListaTarea>
    </section>
  );
};

export default FormularioTarea;

import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  return (
    <section>
      <form>
        <div class="mb-3 d-flex ">
          <input
            type="text"
            class="form-control"
            id="inputTarea"
            placeholder="Ingresa una tarea"
          />
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
      <ListaTarea></ListaTarea>
    </section>
  );
};

export default FormularioTarea;

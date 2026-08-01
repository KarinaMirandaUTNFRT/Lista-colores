const ItemColor = ({ id, textoColorProps, deleteColorProps, EditColorProps }) => {
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
  const colorLimpio = textoColorProps || "".toLowerCase().trim();
  const colorFinalCSS = traductorColores[colorLimpio] || colorLimpio;
  return (
    <li className="list-group-item    bg-black text-white  d-flex    align-items-center gap-3 border-secondary mb-2 p-2">
      <div
        className="d-flex align-items-center justify-content-center  border border-secondary rounded p-1 flex-grow-1 gap-3"
        style={{ minHeight: "50px" }}
      >
        <div
          style={{
            backgroundColor: colorFinalCSS,
            width: "35%",
            height: "38px",
            borderRadius: "4px",
            border: "1px solid #6c757d",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)",
            flexShrink:0,
          }}
        />
        <div className="flex-grow-1  ms-3 px-2">
          <span
            className="small text-capitalize text-light fw-bold"
            style={{ fontSize: "0.9rem" }}
          >
            {textoColorProps}
          </span>
        </div>
      </div>
      <div className="d-flex gap-2">
        <button
          className="btn btn-warning px-3"
          onClick={() => EditColorProps && EditColorProps({ _id: id, nombreColor: textoColorProps })}
        >
          Editar
        </button>
        <button
          className="btn btn-danger px-3"
          onClick={() => deleteColorProps && deleteColorProps(id)}
        >
          Borrar{" "}
        </button>
      </div>
    </li>
  );
};

export default ItemColor;

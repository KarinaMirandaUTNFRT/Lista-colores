const ItemColor = ({textoColorProps, deleteColorProps} ) => {
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
    turquesa: "turquoise"
  }
  const colorLimpio = textoColorProps.toLowerCase().trim();
  const colorFinalCSS = traductorColores[colorLimpio] || colorLimpio;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
<div className="d-flex align-items-center flex-grow-1">
        <div 
          style={{ 
            backgroundColor: colorFinalCSS, 
            width: '20%', 
            height: '40px', 
            borderRadius: '4px', 
            border: '1px solid #dee2e6', // Borde sutil por si el color es blanco
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' // Sombra interna para darle profundidad
          }} 
        />
      </div>
    <button className="btn btn-danger"
       onClick={()=> deleteColorProps(textoColorProps)}> 
       Borrar </button>
    </li>
  );
};

export default ItemColor;

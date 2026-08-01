import ItemColor from "./ItemColor";

const ListaColor = ({ arrayColoresProps, borrarColorProps }) => {
  return (
    <ul
      className="list-group mx-auto p-0 mt-4"
      style={{ maxWidth: "600px", width: "100%" }}
    >
      {colores.map((color) => (
  <ItemColor
    key={color._id}
    id={color._id}
    textoColorProps={color.nombreColor}
    deleteColorProps={borrarColor}      
    onEditColorProps={prepararEdicion}  
        />
      ))}
    </ul>
  );
};

export default ListaColor;

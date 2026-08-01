import ItemColor from "./ItemColor";

const ListaColor = ({ 
  arrayColoresProps =[],
  borrarColorProps,
  onEditColorProps,
 }) => {
  return (
    <ul
      className="list-group mx-auto p-0 mt-4"
      style={{ maxWidth: "600px", width: "100%" }}
    >
      {arrayColoresProps.map((color) => (
  <ItemColor
    key={color._id}
    id={color._id}
    textoColorProps={color.nombreColor}
    deleteColorProps={borrarColorProps}      
    onEditColorProps={() =>onEditColorProps(color)}  
        />
      ))}
    </ul>
  );
};

export default ListaColor;

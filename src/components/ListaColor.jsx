import ItemColor from "./ItemColor";

const ListaColor = ({ arrayColoresProps, borrarColorProps }) => {
  return (
    <ul className="list-group mx-auto p-0 mt-4" 
    style={{ maxWidth: "600px", width: "100%" }}
    >
      {arrayColoresProps.map((textoColor, indice) => (
        <ItemColor 
          key={indice} 
          textoColorProps={textoColor} 
          deleteColorProps={borrarColorProps}
        />
      ))}
    </ul>
  );
};

export default ListaColor;
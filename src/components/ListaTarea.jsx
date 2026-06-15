import ItemTarea from "./ItemTarea";

const ListaTarea = ({arraytareasProps}) => {
  return (
    <ul className="list-group">
      {
      arraytareasProps.map((textoTarea, indice) => 
        <ItemTarea key={indice} textotareaProps={textoTarea}></ItemTarea>)
        }
    </ul>
  );
};

export default ListaTarea;

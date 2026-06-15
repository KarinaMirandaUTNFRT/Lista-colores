import ItemTarea from "./ItemTarea";

const ListaTarea = ({arraytareasProps}) => {
  return (
    <ul className="list-group">
      {
      arraytareasProps.map((itemTarea, indice) => 
        <ItemTarea key={indice}></ItemTarea>)
        }
    </ul>
  );
};

export default ListaTarea;

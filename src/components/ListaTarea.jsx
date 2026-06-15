import ItemTarea from "./ItemTarea";

const ListaTarea = ({arraytareasProps}) => {
  return (
    <ul className="list-group">
      {
      arraytareasProps.map(() => 
        <ItemTarea></ItemTarea>)
        }
    </ul>
  );
};

export default ListaTarea;

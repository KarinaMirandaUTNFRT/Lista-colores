import { useEffect, useState } from "react";
import ListaColor from "./ListaColor";

const FormularioColor = () => {
  const tareaLocalstorage = JSON.parse(localStorage.getItem('arrayColoreskey')) || []
  const [arrayColores, setarrayColores] = useState(tareaLocalstorage);
  const [color, setColor] = useState('');
   //useEffect(()=>{
    //console.log('desde el useEffect')
   //})
  useEffect(()=>{
    console.log('desde el useEffect')
    localStorage.setItem('arrayColoreskey', JSON.stringify(arrayColores))
   },[arrayColores])


   const handleSubmit = (e) => {
    e.preventDefault();

    const colorBuscada = arrayColores.find(
      (itemColor) => itemColor.toLowerCase === color.toLowerCase().trim(),
    );
    console.log(colorBuscada);
    if (colorBuscada) {
      return alert("la color ya existe");
    }
    setarrayColores([...arrayColores, color.trim()]);
    setColor("");
  };
  const borrarColor = (nombreColor) => {
    const arrayFiltrado = arrayColores.filter((item) => item !== nombreColor);
    setarrayColores(arrayFiltrado);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex ">
          <input
            type="text"
            className="form-control"
            id="inputColor"
            placeholder="Ingresa una color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
      <ListaColor arrayColoresProps={arrayColores} borrarColorProps={borrarColor}></ListaColor>
    </section>
  );
};

export default FormularioColor;

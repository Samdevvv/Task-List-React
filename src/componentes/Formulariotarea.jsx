import React from "react";
import { useState } from "react";
import Tarea from "./Tarea";
import { v4 as uuidv4} from 'uuid';

function FormularioTarea(props){

    const [input, setiInput] = useState('');

   const  manejarCambio = envio =>{
      setiInput(envio.target.value);
     

    }
    
    const manejarEnvio  = envio =>{
        envio.preventDefault();
        console.log("Tarea Agregada");
        const tareaNueva={
            id:uuidv4(),
            tarea:input,
            completada:false
        }
        props.onSubmit(tareaNueva);

    }

    return(
     <form action="" className="tarea-formulario" onSubmit={manejarEnvio}>
        <input
        className="tarea-input"
        type="text"
        placeholder="Escribe Una Tarea :)"
        name="texto"
        onChange={manejarCambio}
        
        />

        <button className="boton-input">
            Agregar Tarea
        </button>
     </form>
    );
}


export default FormularioTarea;
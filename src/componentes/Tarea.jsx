import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Tarea({ id, tarea, completada, completarTarea, eliminarTarea}){
    return(
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
       <div className="tarea-texto"
        onClick={()=> completarTarea(id)}>
       {tarea}
       </div>

       <div className="estado-contenedor" onClick={() => eliminarTarea(id)}>
       <AiFillDelete className="estado"/>
       </div>

    </div>
    );
}


export default Tarea;
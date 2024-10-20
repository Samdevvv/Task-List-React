import React from "react";
import FormularioTarea from "./Formulariotarea";
import Tarea from "./Tarea";
import { useState } from "react";



function ListaTarea(props){

    const [tareas,setTareas]= useState([]);

    const agregarTarea = tarea=>{
        
     if(tarea.tarea ===""){
      alert("Escriba Una Tarea")
     }
     else{
        console.log(tarea)
        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
     }
        
    }

    const eliminarTarea = id =>{
       const tareasActualizadas = tareas.filter(tarea=>tarea.id !== id);
       setTareas(tareasActualizadas);
    }

    const completarTarea = id =>{

        const tareasActualizadas = tareas.map(tarea =>{
          if(tarea.id === id){
            tarea.completada = !tarea.completada;
          }
           return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return(
    <>
       <FormularioTarea onSubmit={agregarTarea} />  

       <div className="lista-de-tareas">
        {
            tareas.map((tarea)=>
                <Tarea
                key={tarea.id}
                id={tarea.id}
                tarea={tarea.tarea}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
                />
             
            )
        }
        </div>  
    </>
    );
}


export default ListaTarea;
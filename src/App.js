import './App.css';
import Tarea from './componentes/Tarea';
import './estilos/tarea.css';
import './estilos/formulario.css';
import ListaTarea from './componentes/ListaDeTareas';
import './estilos/listadetareas.css';

function App() {
  return (
    <div className="App">
      <div className="titulo" >Lista De Tareas</div>
      <div className='lista-tarea'>
       <h1>Mis Tareas</h1>
       <ListaTarea/>
        
        
      </div>
      
    </div>
  );
}

export default App;

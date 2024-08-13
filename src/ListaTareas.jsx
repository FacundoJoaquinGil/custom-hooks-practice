import { useReducer } from "react";
import { useForm } from "./hooks/useForm";

const tareaInicial = [
  {
    id: new Date().getTime(),
    tarea: "Practicar Reducer",
    finalizada: false,
  },
];

// const nuevaTarea = [
//   {
//     id: new Date().getTime(),
//     tarea: "[TAREAS] Practicar useReducer",
//     finalizada: false,
//   },
// ];

// const accion = {
//   tipo: '[TAREAS] Agregar tarea',
//   payload: nuevaTarea,
// };

const tareaReducer = (estado = tareaInicial, accion = {}) => {
  // if(accion.tipo === 'Agregar un nueva tarea'){
  //     return[...estado, accion.payload]
  // }return estado

  switch (accion.tipo) {
    case "[TAREAS] Agregar tarea":
      return [...estado, accion.payload];
    case "[TAREAS] Finalizar tarea":
      console.log("Finalizar");
      return estado.map((objeto) => {
        if (objeto.id === accion.payload) {
          return {
            ...objeto,
            finalizada: !objeto.finalizada,
          };
        }
        return objeto;
      });
    case "[TAREAS] Eliminar tarea":
      console.log("Eliminar");
      return estado.filter((objeto) => objeto.id !== accion.payload
      )
    case "[TAREAS] Borrar todo":
      console.log("Borrar Todo");
      return [];
    default:
      return state;
  }
};

export const ListaTareas = () => {
  const [state, dispatch] = useReducer(tareaReducer, tareaInicial);

  const { tarea, valuesForm, onInputChange } = useForm({ tarea: "" });
  const agregarTarea = (event) => {
    event.preventDefault();
    if (valuesForm.tarea === "") return;
    const nuevaTarea = {
      id: new Date().getTime(),
      tarea: valuesForm.tarea,
      finalizada: false,
    };
    console.log(tarea);
    const accion = {
      tipo: "[TAREAS] Agregar tarea",
      payload: nuevaTarea,
    };
    dispatch(accion);
  };

  const tareaFinalizada = ({ id }) => {
    const accion = {
      tipo: "[TAREAS] Finalizar tarea",
      payload: id,
    };
    dispatch(accion);
  };

  const eliminarTarea = ({ id }) => {
    const accion = {
      tipo: "[TAREAS] Eliminar tarea",
      payload: id,
    };
    dispatch(accion);
  };

  const eliminarTodo = () => {
    const accion = {
      tipo: "[TAREAS] Borrar todo",
      payload: '',
    };
    dispatch(accion);
  };

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="form-group">
          <label>Tareas</label>
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="Ingrese una tarea"
            value={tarea}
            onChange={onInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <button type="button" onClick={eliminarTodo} className="btn btn-warning">
          Borrar Todo
        </button>

        <hr />

        <ul className="list-group">
          {state.map((item) => {
            return (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span>
                  {item.tarea}
                  {item.finalizada ? "✅" : "❌"}
                </span>
                <div>
                <input
                  type="checkbox"
                  value={item.finalizada}
                  onChange={() => tareaFinalizada(item)}
                />
                <button 
                className="btn btn-danger"
                onClick={() =>eliminarTarea(item)}
                >Borrar</button>
                </div>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
};

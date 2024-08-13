import '../Style/ContadorComponente.css';
import { useCounter } from "./hooks/useCounter";

export const ContadorComponente = () => {

  const { contador, resetear, sumar, restar } = useCounter(0)

  return (
    <>
      <div className="contenedor-contador">
        <h1>CONTADOR: {contador}</h1>
        <div className="columna-botones">
          <button className="btn-1" onClick={() => sumar(1)}>
            Sumar +1
          </button>
          <button className="btn-2" onClick={() => resetear()}>
            Resetear
          </button>
          <button className="btn-3" onClick={() => restar(1)}>
            Restar -1
          </button>
        </div>
      </div>
    </>
  );
};

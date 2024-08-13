import { useCallback, useState } from "react";
import { Incrementar } from "./Incrementar";

export const CallbackComponente = () => {
  const [counter, setCounter] = useState(0);

  const incrementarPadre = useCallback((valor) => {
    setCounter(contador => contador + valor);
  }, []);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  );
};

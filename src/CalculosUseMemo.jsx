import { useMemo } from "react";
import { useState } from "react";

export const CalculosUseMemo = () => {
  const getCalculo = (listaNumeros) =>
    useMemo(() => {
      console.log("calculando");
      return listaNumeros.reduce((a, b) => a * b);
    }, [listaNumeros]);

  const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const [show, setShow] = useState(true);

  const agregarNumero = () => {
    setListaNumeros([
      ...listaNumeros,
      listaNumeros[listaNumeros.length - 1] + 1,
    ]);
  };

  return (
    <>
      <h1>Calculo:</h1>
      <p>{getCalculo(listaNumeros)}</p>
      <button onClick={() => setShow(!show)}>{show ? "show" : "hide"}</button>
      <button onClick={() => agregarNumero()}>agregar</button>
    </>
  );
};

import { useState } from "react"

export const useCounter = (valorInicial = 0) => {

    const [contador, setContador] = useState(valorInicial)

    const sumar = (valor = 1) => {
        setContador(contador + valor)
    }
    const restar = (valor = 1) => {
        setContador(contador - valor)
    }
    const resetear = () => {
        setContador(0)
    }

  return (
    {
        contador,
        resetear,
        sumar,
        restar
    }
  )
}


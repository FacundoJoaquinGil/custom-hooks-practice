import { useState } from "react"

export const Contador = () => {

    const [counter, setCounter] = useState(0)

    console.log('estoy incrementando')

    const aumentar = () =>{
        setCounter(counter + 1)
    }

  return (
    <>
    <h1>Contador: {counter}</h1>
    <button className="btn btn-primary" onClick={aumentar}>+1</button>
    </>
  )
}

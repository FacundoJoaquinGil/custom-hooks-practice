import React from "react"

export const Incrementar = React.memo(({incrementar}) => {

    console.log('estoy incrementando')

  return (

    <>
    <button className="btn btn-info" onClick={() => incrementar(+100)}>+1</button>
    </>

  )
})

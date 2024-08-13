import { useFetch } from "./hooks/useFetch";

export const UsuariosComponente = () => {

  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <>
      <h1>Tabla de usuarios</h1>
      {
        isLoading 
        ? <p>...cargando</p>
       : error 
       ?  <p>ha ocurrido un error: {error}</p>
       :  <table className="table table-dark">
           <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">nombre</th>
              <th scope="col">email</th>
              <th scope="col">website</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => {
              return(
                <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      }
    </>
  );
};

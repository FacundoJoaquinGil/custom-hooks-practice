import { useForm } from "./hooks/useForm";

export const Form = () => {

    const initialForm = {userName: '',
        email: '',
        password: ''}
  
  const {valuesForm, onInputChange} = useForm(initialForm)
  const { userName, email, password } = valuesForm;
  const onSubmit = (event) => {
    event.preventDefault()
    console.log(valuesForm)
  };

  return (
    <form onSubmit = {onSubmit}>
      <h1>Custom Hook De Formulario</h1>
      <div className="form-group">
        <label htmlFor="exampleInputUser">UserName</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter Username"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

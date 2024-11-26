import { useContext } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const navigate = useNavigate()
  const { login } = useContext(AuthContext);

  const onLogin = () => {

    login('Matias Peñailillo')

    navigate('/', {
      replace: true
    })
  }

  return (
    <div className="container mt-5">

      <h1>  Login  </h1>
      
      <button className="btn btn-primary" onClick={ onLogin }> Login </button>

    </div>
  )
}

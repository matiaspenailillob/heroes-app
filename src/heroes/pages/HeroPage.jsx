import { Navigate, useNavigate, useParams } from "react-router"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {

  // Cualquier cambio de state, o algun componente padre que indirectamente vuelva a generar este componente, y llamamos a un proceso pesado
  // usaremos useMemo para memorizar valores a diferencia del useCallback para las funciones

  const { id } = useParams();
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(id), [id]) // Se mantendrá hasta que el id cambie

  const onNavigateBack = () => {
    navigate(-1); // La pestaña anterior del navegador
  }

  if(!hero) {
    return <Navigate to="/marvel" />
  }
  

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/heroes/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>

      <div className="col-8">
        <h3> { hero.superhero } </h3>
        <ul className="list-group list-group-flush">

          <li className="list-group-item"> 
          <b> Alter ego: </b> { hero.alter_ego }
          </li>

          <li className="list-group-item"> 
          <b> Publisher: </b> { hero.publisher }
          </li>

          <li className="list-group-item"> 
          <b> First Appearance: </b> { hero.first_appearance }
          </li>

        </ul>


        <h5 className="mt-3"> Characters</h5>
        <p> { hero.characters } </p>

        <button className="btn btn-info" onClick={onNavigateBack}>
          Regresar
        </button>

      </div>
    </div>
  )
}

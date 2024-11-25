import { Link } from "react-router-dom";


const CharactersByHero = ({ alter_ego, characters }) => {
    return (alter_ego === characters) ? (<></>) : <p>{ characters } </p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

   const heroImageUrl  = `/assets/heroes/heroes/${id}.jpg`
   // const charactersByHero = (<p> { characters } </p>)
   

  return (
    <div className="col animate__animated animate__fadeIn">

        <div className="card">

            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImageUrl} className="card-img" alt={ superhero } />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <div className="card-title">
                            { superhero}
                        </div>

                        <div className="card-text">{ alter_ego }</div>


                        <CharactersByHero alter_ego={alter_ego} characters={characters} />

                        <p className="card-text">
                            <small className="text-muted"> { first_appearance } </small>
                        </p>


                        <Link to={`/hero/${id}`}>
                            Mas...
                        </Link>

                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

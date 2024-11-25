import { HeroCard } from '../components/HeroCard'

export const SearchPage = () => {
  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">


      <div className="col-5">
        <h4>Searching</h4>
        <hr />

        <form>

          <input type="text" placeholder="Search a hero" autoComplete="off" name="searchText" className="form-control" />

          <button className="btn btn-outline-primary mt-2"> Search </button>
        </form>

      </div>

      <div className="div col-7">

        <h4> Results </h4>
        <hr />

        <div className="alert alert-primary">
          Search a hero
        </div>

        <div className="alert alert-danger">
          Hero not found
        </div>

        <HeroCard />

      </div>

      </div>

      
    </>
  )
}

import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import queryString from "query-string";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  console.log('Location', location);
  

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });


  const onSearchInput = (event) => {
    event.preventDefault();

    if(searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`) // a la url en la que estoy parado le agrego el queryparam

  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchInput}>
            <input
              type="text"
              placeholder="Search a hero"
              autoComplete="off"
              name="searchText"
              className="form-control"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-2"> Search </button>
          </form>
        </div>

        <div className="div col-7">
          <h4> Results </h4>
          <hr />

          <div className="alert alert-primary">Search a hero</div>

          <div className="alert alert-danger">Hero { q } not found</div>

          <HeroCard />
        </div>
      </div>
    </>
  );
};

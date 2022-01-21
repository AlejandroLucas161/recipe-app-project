import Results from "../components/Results"
import spinner from '../assets/images/spinner.svg'
import { Fragment } from "react"


const HomePage = ({ query, recipes, loading, search, getSearch, updateSearch }) => {
  return (
    <Fragment>
      <form onSubmit={getSearch} className='search-form'>
        <div className="search-form-content">
          <input className='search-bar' type='text' value={search} onChange={updateSearch} />

          <button className='search-btn' type='submit'>
            Search
          </button>
        </div>
      </form>  

      {loading ? (
        <img src={spinner} />
      ) : (
        <Results query={query} recipes={recipes} />
      )}  
    </Fragment>
  )
}

export default HomePage

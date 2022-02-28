import { Fragment } from 'react'

import Results from '../components/Results'
import spinner from '../assets/images/spinner.svg'

import '../App.css';

const HomePage = ({ query, recipes, loading, search, getSearch, updateSearch }) => {
  return (
    <Fragment>
      <form onSubmit={getSearch} className="search-form">
        <div className="search-form-content">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />

          <button className="search-btn" type="submit" disabled={!search}>
            Search
          </button>
        </div>
      </form>  

      {loading ? (
        <img className="spinner" src={spinner} />
      ) : (
        <Results query={query} recipes={recipes} />
      )}  
    </Fragment>
  )
}

export default HomePage

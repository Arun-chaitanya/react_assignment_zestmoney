import React from 'react'
import './Navbar.css'

function Navbar({genres,fetchMovies,fetchSeries,searchInput,changeInput,submitSearch,selectGenre}) {
    return (
        <div className='navbar'>
            <div className="navbar__left">
                <p onClick={fetchMovies} id="movies">Movies</p>
                <p onClick={fetchSeries} id="series">Series</p>
                <select name="Genre" className="nav__genreDropdown" onChange={selectGenre}>
                <option value="All">Genre</option>
                {genres.map(genre => (
                    <option key = {genre.id} value = {genre.id} >
                        {genre.name}
                    </option>
                ))}
                </select>
            </div>
            <div className="searchBox">
                <input 
                    type="text" 
                    value={searchInput} 
                    placeholder = 'Search Keywords' 
                    onChange={changeInput}
                    >
                </input>
                <button onClick={submitSearch}>SEARCH</button>
            </div>
            
        </div>
    );
}

export default Navbar;

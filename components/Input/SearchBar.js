"use client";
import IconSearch from "@/assets/IconSearch";
import classes from "./searchbar.module.css";
import { useState } from "react";
import Link from "next/link";
import { getAnyMovie, getAnySeries } from "@/helpers/api-util";

const SearchBar = ({ trendingMovies, trendingTVSeries }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const movieArray = Object.values(trendingMovies);
  const seriesArray = Object.values(trendingTVSeries);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setQuery(input);

    const filteredMovies = movieArray[1].filter((movie) =>
      movie.title.toLowerCase().includes(input.toLowerCase())
    );

    const filteredTvSeries = seriesArray[1].filter((series) =>
      series.name.toLowerCase().includes(input.toLowerCase())
    );
    // this combines both results
    setSuggestions([...filteredMovies, ...filteredTvSeries]);

    if(filteredMovies.length === 0 && filteredTvSeries.length === 0) {
      anySearch(input);
    }

  };

  const anySearch = async (query) => {
    const anyMovieData = await getAnyMovie(query);
    const anyTvSeries = await getAnySeries(query);

    const anyMovieArray = anyMovieData.results;
    const anySeriesArray = anyTvSeries.results;
    console.log(anySeriesArray)
    console.log(anyMovieArray)

    // combine the data
    const combinedResults = [...anyMovieArray, ...anySeriesArray];

    // make it available for the search bar
    setSuggestions(combinedResults)
    
  };

  const handleSuggestionClick = (suggestion) => {
    console.log(`Selected: ${suggestion.title ? suggestion.title : suggestion.name}`);

    setSuggestions([]);
    setQuery("");
  };

  console.log(suggestions)

  return (
    <div className={classes.searchContainer}>
      <label htmlFor="input"></label>
      <div className={classes.search}>
        <i className={classes.icon}>
          <IconSearch />
        </i>
        <input
          type="text"
          id="input"
          name="input"
          placeholder="Search for movies or TV series"
          className={classes.searchBar}
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {query && suggestions.length > 0 && (
          <div className={classes.suggestionsContainer}>
            <ul className={classes.suggestionsList}>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <Link className={classes.link} href={`${ suggestion.title ? `/movies/${suggestion.id}` : `/series/${suggestion.id}` }`}>
                  {suggestion.title || suggestion.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default SearchBar;

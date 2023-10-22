import IconSearch from "@/assets/IconSearch";
import classes from './searchbar.module.css';

const SearchBar = () => {
  return (
    <div className={classes.searchContainer}>
      <label htmlFor="input"></label>
      <div className={classes.search}>
        <i className={classes.icon}><IconSearch /></i>
        <input
          type="text"
          id="input"
          name="input"
          placeholder="Search for movies or TV series"
          className={classes.searchBar}
        />
      </div>
    </div>
  );
};

export default SearchBar;

import Movie from "./Movie";
import classes from "./trending.module.css";

const Trending = ({ trendingMovies }) => {
  const trendingMoviesResults = trendingMovies.results;
  console.log(trendingMoviesResults)

  return (
    <div className={classes.trendingTopContainer}>
      <h1 className={classes.heading}>Trending</h1>
      <ul className={classes.trendingMoviesContainer}>
        {trendingMoviesResults.map((trendingMovie) => (
          <Movie
            key={trendingMovie.id}
            movieId={trendingMovie.id}
            moviePoster={trendingMovie.poster_path}
            alt={trendingMovie.overview}
          />
        ))}
      </ul>
    </div>
  );
};

export default Trending;

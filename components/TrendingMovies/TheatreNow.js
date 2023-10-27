import Movie from "./Movie";
import classes from './theatrenow.module.css';

const TheatreNow = ({ title, movies }) => {
  const moviesInTheatres = movies.results;

  return (
    <>
      <h1 className={classes.title}>{title}</h1>
      <ul className={classes.moviesContainer}>
        {moviesInTheatres.map((movieInTheatre) => (
          <Movie
            key={movieInTheatre.id}
            movieId={movieInTheatre.id}
            moviePoster={movieInTheatre.poster_path}
            alt={movieInTheatre.overview}
          />
        ))}
      </ul>
    </>
  );
};

export default TheatreNow;

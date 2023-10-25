import Link from "next/link";
import classes from "./movie.module.css";
import Image from "next/image";

const Movie = ({ alt, moviePoster, movieId }) => {
  // console.log(`https://api.themoviedb.org/3/movie/${movieId}/images`)
  // console.log(`https://api.themoviedb.org/3/movie/${movieId}${moviePoster}`)
  // const imageUrl = `https://api.themoviedb.org/3/movie/${movieId}${moviePoster}`;
  // this is an alternative option for now..
  const imageUrl = `https://image.tmdb.org/t/p/original/${moviePoster}`;

  return (
    <li className={classes.movieContainer}>
      <Link href={`/movies/${movieId}`} className={classes.imageContainer}>
        <Image src={imageUrl} width={240} height={470} alt={alt} className={classes.moviePoster} />
      </Link>
    </li>
  );
};

export default Movie;

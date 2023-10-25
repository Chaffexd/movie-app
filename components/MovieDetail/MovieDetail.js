import Image from "next/image";
import classes from "./moviedetail.module.css";

const MovieDetail = ({
  title,
  description,
  releaseDate,
  backdropSource,
  posterSource,
  rating
}) => {
  const fullImageUrl = `https://image.tmdb.org/t/p/original/${posterSource}`;
  const backdrop = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdropSource})`,
    backgroundSize: 'cover',
  };

  return (
    <div className={classes.movieDetailContainer} style={backdrop}>
      <div className={classes.imageContainer}>
        <Image width={300} height={500} alt={title} src={fullImageUrl} className={classes.image} />
      </div>
      <div className={classes.infoContainer}>
        <h1 className={classes.title}>{title}</h1>
        <h2 className={classes.date}>Relase date: {releaseDate}</h2>
        <p>{description}</p>
        <p>Rating: {rating} / 10</p>
      </div>
    </div>
  );
};

export default MovieDetail;

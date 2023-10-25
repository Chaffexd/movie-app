"use client"; 

import Image from "next/image";
import classes from "./moviedetail.module.css";
import Bookmark from "../Bookmark/Bookmark";
import { useBookmark } from "../../context/bookmarkContext";

const MovieDetail = ({
  title,
  description,
  releaseDate,
  posterSource,
  rating,
  movieId
}) => {
  const fullImageUrl = `https://image.tmdb.org/t/p/original/${posterSource}`;

  const { bookmarkedMovies, addBookmark, removeBookmark } = useBookmark();

  const isBookmarked = bookmarkedMovies.includes(movieId);

  console.log(bookmarkedMovies);

  return (
    <div className={classes.movieDetailContainer}>
      <div className={classes.imageContainer}>
        <Image width={300} height={500} alt={title} src={fullImageUrl} className={classes.image} />
      </div>
      <div className={classes.infoContainer}>
        <h1 className={classes.title}>{title}</h1>
        <time className={classes.date}>Relase date: {releaseDate}</time>
        <p className={classes.description}>{description}</p>
        <p>Rating: {rating} / 10</p>
        <Bookmark
        isBookmarked={isBookmarked}
        onToggle={() => {
          if (isBookmarked) {
            removeBookmark(movieId);
          } else {
            addBookmark(movieId);
          }
        }}
      />
      </div>
    </div>
  );
};

export default MovieDetail;

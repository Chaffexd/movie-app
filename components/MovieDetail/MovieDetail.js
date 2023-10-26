"use client";
import Image from "next/image";
import classes from "./moviedetail.module.css";
import Bookmark from "../Bookmark/Bookmark";
import { useBookmark } from "../../context/bookmarkContext";
import { useUser } from "@auth0/nextjs-auth0/client";

const MovieDetail = ({
  title,
  description,
  releaseDate,
  posterSource,
  rating,
  movieId,
}) => {
  // this is to getch the movie poster
  const fullImageUrl = `https://image.tmdb.org/t/p/original/${posterSource}`;

  // this is my context, we have for adding, removing and keeping track of all of them
  const { bookmarkedMovies, addBookmark, removeBookmark } = useBookmark();
  // this will confirm wether a movie is bookmarked
  const isBookmarked = bookmarkedMovies.includes(movieId);
  // this logs the context for a user
  console.log(bookmarkedMovies);

  // this is to confirm if a user is logged in, if they are, it will show the bookmark icon
  const { user } = useUser();

  return (
    <div className={classes.movieDetailContainer}>
      <div className={classes.imageContainer}>
        <Image
          width={300}
          height={500}
          alt={title}
          src={fullImageUrl}
          className={classes.image}
        />
      </div>
      <div className={classes.infoContainer}>
        <h1 className={classes.title}>{title}</h1>
        <time className={classes.date}>Relase date: {releaseDate}</time>
        <p className={classes.description}>{description}</p>
        <p>Rating: {rating} / 10</p>
        {user && (
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
        )}
      </div>
    </div>
  );
};

export default MovieDetail;

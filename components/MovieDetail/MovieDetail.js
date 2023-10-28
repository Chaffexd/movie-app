"use client";
import Image from "next/image";
import classes from "./moviedetail.module.css";
import Bookmark from "../Bookmark/Bookmark";
import { useBookmark } from "../../context/bookmarkContext";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { getBookmarks } from "@/helpers/firebase";

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
  // const isBookmarked = bookmarkedMovies.some((bookmark) => bookmark.movieId === movieId && bookmark.title === title);
  // console.log(isBookmarked); // returns true for bookmarked item, false for not
  // this logs the context for a user

  // this is to confirm if a user is logged in, if they are, it will show the bookmark icon
  const { user } = useUser();

  // this is to initialise state
  const [isBookmarked, setIsBookmarked] = useState(false);
  console.log(isBookmarked);
  console.log(bookmarkedMovies)

  useEffect(() => {
    console.log("Effect run if user")
    if (user && user.nickname) {
      const fetchUserBookmarks = async () => {
        const userBookmarksObject = await getBookmarks(user.nickname);
        console.log(userBookmarksObject)
        // returns an object - console.log(userBookmarks)
        if (userBookmarksObject) {
          const userBookmarks = Object.values(userBookmarksObject);
          const isMovieBookmarked = userBookmarks.some(
            (bookmark) => bookmark.itemId === movieId
          );
          setIsBookmarked(isMovieBookmarked);
        }
      };

      fetchUserBookmarks();
    }
  }, [user, movieId]);

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
        <p>Rating: {rating.toFixed(1)} / 10</p>
        {user && (
          <Bookmark
            isBookmarked={isBookmarked}
            onToggle={() => {
              if (isBookmarked) {
                removeBookmark(movieId, title, "movie");
                setIsBookmarked(false);
              } else {
                addBookmark(movieId, title, "movie");
                setIsBookmarked(true);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;

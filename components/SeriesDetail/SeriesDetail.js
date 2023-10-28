"use client";
import Image from "next/image";
import classes from "../MovieDetail/moviedetail.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import Bookmark from "../Bookmark/Bookmark";
import { useBookmark } from "@/context/bookmarkContext";
import { useEffect, useState } from "react";
import { getBookmarks } from "@/helpers/firebase";

const SeriesDetail = ({
  title,
  description,
  releaseDate,
  posterSource,
  rating,
  seriesId,
}) => {
  const fullImageUrl = `https://image.tmdb.org/t/p/original/${posterSource}`;

  // this is to confirm if a user is logged in, if they are, it will show the bookmark icon
  const { user } = useUser();

  // handle bookmarking for tv series
  const { addBookmark, removeBookmark } = useBookmark();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // fetching users bookmarks
  useEffect(() => {
    if (user && user.nickname) {
      const fetchUserBookmarks = async () => {
        const userBookmarksObject = await getBookmarks(user.nickname);
        // returns an object - console.log(userBookmarks)
        if (userBookmarksObject) {
          const userBookmarks = Object.values(userBookmarksObject);
          const isMovieBookmarked = userBookmarks.some(
            (bookmark) => bookmark.itemId === seriesId
          );
          setIsBookmarked(isMovieBookmarked);
        }
      };

      fetchUserBookmarks();
    }
  }, [user, seriesId]);

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
                removeBookmark(seriesId, title, "series");
                setIsBookmarked(false);
              } else {
                addBookmark(seriesId, title, "series");
                setIsBookmarked(true);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SeriesDetail;

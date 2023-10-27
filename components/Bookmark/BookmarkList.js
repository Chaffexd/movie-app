"use client";
import { getMovieData, getSeriesData } from "@/helpers/api-util";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBookmarks } from "@/helpers/firebase";
import { useUser } from "@auth0/nextjs-auth0/client";

import classes from "./bookmarklist.module.css";

const BookmarkList = () => {
  const [bookmarkedData, setBookmarkedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (user && user.nickname) {
        const userBookmarks = await getBookmarks(user.nickname);
        if (userBookmarks) {
          setLoading(true);
          const bookMarksArray = Object.values(userBookmarks);
          // this returns the genre - console.log(bookMarksArray.map((item) => item.type))
          // returns all bookmarks for a user console.log(bookMarksArray)
          // Fetch movie data and update the state for user bookmarks
          const dataPromises = bookMarksArray.map(async (bookmark) => {
            if (bookmark.type === "movie") {
              return getMovieData(bookmark.itemId);
            } else if (bookmark.type === "series") {
              return getSeriesData(bookmark.itemId);
            }
          });
          const bookmarkedData = await Promise.all(dataPromises);
          setBookmarkedData(bookmarkedData);
        }
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, [user]);

  // bookmarkedMovieData is an object within the array
  return (
    <div>
      <h2 className={classes.title}>Your bookmarks:</h2>
      {loading && <p>Loading bookmarks...</p>}
      {bookmarkedData.length > 0 && (
        <ul className={classes.bookmarkedMoviesContainer}>
          {bookmarkedData.map((item) => (
            <li key={item?.id} className={classes.bookmarkItem}>
              <Link href={`/${item.seasons ? "series" : "movies"}/${item?.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                  width={200}
                  height={300}
                  alt={item?.title || item?.name}
                  className={classes.poster}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookmarkList;

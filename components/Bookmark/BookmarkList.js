"use client";
import { useBookmark } from "@/context/bookmarkContext";
import { getMovieData } from "@/helpers/api-util";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBookmarks } from "@/helpers/firebase";
import { useUser } from "@auth0/nextjs-auth0/client";

import classes from "./bookmarklist.module.css";

const BookmarkList = () => {
  const [bookmarkedMovieData, setBookmarkedMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (user && user.nickname) {
        setLoading(true);
        const userBookmarks = await getBookmarks(user.nickname);
        if (userBookmarks) {
          const bookMarksArray = Object.values(userBookmarks);
          console.log(bookMarksArray)
          // Fetch movie data and update the state for user bookmarks
          const movieDataPromises = bookMarksArray.map(async (movieId) => {
            return await getMovieData(movieId.movieId);
          });
          const movieData = await Promise.all(movieDataPromises);
          setBookmarkedMovieData(movieData);
        }
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, [user]);

  // bookmarkedMovieData is an object within the array
  console.log(`The user is: ${user?.nickname}. Their bookmarks are: ${bookmarkedMovieData.map(movie => movie?.title).join(', ')}`)

  return (
    <div>
      <h2 className={classes.title}>Your bookmarks:</h2>
      {loading && <p>Loading bookmarks...</p>}
      {bookmarkedMovieData.length > 0 ? (
        <ul className={classes.bookmarkedMoviesContainer}>
          {bookmarkedMovieData.map((movie) => (
            <li key={movie?.id}>
              <Link href={`/movies/${movie?.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  width={200}
                  height={300}
                  alt={movie?.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies bookmarked</p>
      )}
    </div>
  );
};

export default BookmarkList;

"use client";
import { useBookmark } from "@/context/bookmarkContext";
import { getMovieData } from "@/helpers/api-util";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import classes from './bookmarklist.module.css';

const BookmarkList = () => {
  const { bookmarkedMovies } = useBookmark();
  const [bookmarkedMovieData, setBookmarkedMovieData] = useState([]);

  useEffect(() => {
    // this function will perform multiple fetches based on the IDs store from bookmarking
    const fetchBookmarkData = async () => {
      const movieDataPromises = bookmarkedMovies.map(async (movieId) => {
        return await getMovieData(movieId);
      });

      // promise.all resolves all of the promises returned from movieDataPromises
      const movieData = await Promise.all(movieDataPromises);

      setBookmarkedMovieData(movieData);
    };

    fetchBookmarkData();
  }, [bookmarkedMovies]);
  console.log(bookmarkedMovieData);

  return (
    <div>
      <h2>Your bookmarks:</h2>
      {bookmarkedMovieData.length > 0 ? (
        <ul className={classes.bookmarkedMoviesContainer}>
          {bookmarkedMovieData.map((movie) => (
            <li key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={200} height={300} alt={movie.title} />
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

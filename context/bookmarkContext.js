"use client"; 

import { createContext, useContext, useState } from "react";

const BookmarkContext = createContext();

export function useBookmark() {
    return useContext(BookmarkContext);
};

export function BookmarkProvider({ children }) {
    const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

    const addBookmark = (movieId) => {
        setBookmarkedMovies((prevBookmarks) => [...prevBookmarks, movieId]);
    };

    const removeBookmark = (movieId) => {
        setBookmarkedMovies((prevBookmarks) =>
          prevBookmarks.filter((id) => id !== movieId)
        );
    };

    return (
        <BookmarkContext.Provider
          value={{ bookmarkedMovies, addBookmark, removeBookmark }}
        >
          {children}
        </BookmarkContext.Provider>
      );
}
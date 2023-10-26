"use client";
import { createContext, useContext, useState } from "react";
import { ref, push, remove } from 'firebase/database';
import { useUser } from "@auth0/nextjs-auth0/client";
import { database } from "@/helpers/firebase";

const BookmarkContext = createContext();

export function useBookmark() {
    return useContext(BookmarkContext);
};

export function BookmarkProvider({ children }) {
    // places bookmarked movies into an array
    const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
    // tracks the firebase keys as they randomly generate on each add
    const [bookmarkKeys, setBookmarkKeys] = useState([]);
    // confirms if user is logged in or not
    const { user } = useUser();

    const addBookmark = async (movieId) => {
      // creates the user bookmark node at that path
        const bookmarksRef = ref(database, `users/${user.nickname}/bookmarks`);
        // pushes a bookmark to the above ref and which ID of the movie is bookmarked
        const newBookmarkRef = push(bookmarksRef, movieId);

        // Store the generated key in state
        setBookmarkKeys((prevKeys) => [...prevKeys, newBookmarkRef.key]);
        // adds new movie ID to the list of bookmarks
        setBookmarkedMovies((prevBookmarks) => [...prevBookmarks, movieId]);
    };

    const removeBookmark = (movieId) => {
        // Find the index of the bookmark you want to remove
        const index = bookmarkedMovies.indexOf(movieId);

        if (index >= 0) {
            // Use the key to remove the specific bookmark
            const bookmarkKey = bookmarkKeys[index];
            const bookmarksRef = ref(database, `users/${user.nickname}/bookmarks/${bookmarkKey}`);
            remove(bookmarksRef);

            // Update state to remove both the key and the movieId
            setBookmarkKeys((prevKeys) => {
                const newKeys = [...prevKeys];
                newKeys.splice(index, 1);
                return newKeys;
            });

            setBookmarkedMovies((prevBookmarks) => {
                const newBookmarks = [...prevBookmarks];
                newBookmarks.splice(index, 1);
                return newBookmarks;
            });
        }
    };

    return (
        <BookmarkContext.Provider
            value={{ bookmarkedMovies, addBookmark, removeBookmark }}
        >
            {children}
        </BookmarkContext.Provider>
    );
}

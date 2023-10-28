"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { ref, push, remove, get } from "firebase/database";
import { useUser } from "@auth0/nextjs-auth0/client";
import { database } from "@/helpers/firebase";

const BookmarkContext = createContext();

export function useBookmark() {
  return useContext(BookmarkContext);
}

export function BookmarkProvider({ children }) {
  // places bookmarked movies into an array
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  // tracks the firebase keys as they randomly generate on each add
  const [bookmarkKeys, setBookmarkKeys] = useState([]);
  // confirms if user is logged in or not
  const { user } = useUser();

  const addBookmark = async (itemId, title, type) => {
    // creates the user bookmark node at that path
    const bookmarksRef = ref(database, `users/${user.nickname}/bookmarks`);
    // pushes a bookmark to the above ref and which ID of the movie is bookmarked
    const newBookmarkRef = push(bookmarksRef, {
      itemId: itemId,
      title: title,
      type: type,
    });

    // Store the generated key in state
    setBookmarkKeys((prevKeys) => [...prevKeys, newBookmarkRef.key]);
    // adds new movie ID to the list of bookmarks
    setBookmarkedMovies((prevBookmarks) => [
      ...prevBookmarks,
      {
        itemId,
        title,
        type,
      },
    ]);
  };

  const removeBookmark = (itemId, title, type) => {
    // Find the index of the bookmark you want to remove
    const index = bookmarkedMovies.findIndex(
      (bookmark) =>
        bookmark.itemId === itemId &&
        bookmark.title === title &&
        bookmark.type === type
    );
    console.log(index)

    if (index >= 0) {
      // Use the key to remove the specific bookmark
      const bookmarkKey = bookmarkKeys[index];
      const bookmarksRef = ref(
        database,
        `users/${user.nickname}/bookmarks/${bookmarkKey}`
      );
      console.log(bookmarksRef)
      remove(bookmarksRef).then(() => {
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
      })
      .catch((error) => {
        console.error(`Error: ${error}`)
      });

      // Update state to remove both the key and the movieId
    }
  };

  useEffect(() => {
    if (user && user.nickname) {
      const fetchUserBookmarks = async () => {
        const userBookmarksRef = ref(database, `users/${user.nickname}/bookmarks`);
        
        // Fetch bookmarks from the database
        const userBookmarksSnapshot = await get(userBookmarksRef);
        const userBookmarksObject = userBookmarksSnapshot.val();

        if (userBookmarksObject) {
          const userBookmarks = Object.values(userBookmarksObject);
          
          // Update the state with fetched bookmarks
          setBookmarkKeys(Object.keys(userBookmarksObject));
          setBookmarkedMovies(userBookmarks);
          console.log(userBookmarks)
        }
      };

      fetchUserBookmarks();
    }
  }, [user]);

  return (
    <BookmarkContext.Provider
      value={{ bookmarkedMovies, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

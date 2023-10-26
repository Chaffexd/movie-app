import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, child, get } from "firebase/database";

// init database

const firebaseConfig = {
  databaseURL:
    "https://movie-app-3e188-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

export const addBookmark = async (userId, movieId, movieData) => {
  const dbRef = ref(database);
  const bookmarksRef = child(dbRef, `bookmarks/${userId}`);

  const snapshot = await get(bookmarksRef);
  if (snapshot.exists()) {
    const bookmarks = snapshot.val();
    if (bookmarks && bookmarks[movieId]) {
        // do nothing if the bookmark already exists
      return;
    }
  }

  const newBookmarkRef = push(bookmarksRef);

  const bookmark = {
    movieId,
    title: movieData.title,
  };

  try {
    await set(newBookmarkRef, bookmark);
  } catch (error) {
    console.error("Error adding bookmark:" + error);
  }
};

export const getBookmarks = async (userId) => {
  const dbRef = ref(database);
  const bookmarksRef = child(dbRef, `users/${userId}/bookmarks`);

  try {
    const snapshot = await get(bookmarksRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting bookmarks:", error);
    return null;
  }
};

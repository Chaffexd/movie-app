import IconBookmarkEmpty from "@/assets/IconBookmarkEmpty";
import classes from "./bookmark.module.css";
import IconBookmarkFull from "@/assets/IconBookmarkFull";

const Bookmark = ({ isBookmarked, onToggle }) => {
  return (
    <button className={classes.button} onClick={onToggle}>
      {isBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
    </button>
  );
};

export default Bookmark;

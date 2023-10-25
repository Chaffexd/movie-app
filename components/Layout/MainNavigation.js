import IconNavHome from "@/assets/IconNavHome";
import classes from "./mainnavigation.module.css";
import IconNavMovies from "@/assets/IconNavMovies";
import IconNavTVSeries from "@/assets/IconNavTVSeries";
import IconNavBookmark from "@/assets/IconNavBookmark";
import IconLogo from "@/assets/IconLogo";
import Image from "next/image";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <nav className={classes.navBar}>
      <ul className={classes.list}>
        <div className={classes.listItems}>
          <Link href={"/"} className={classes.logo}>
            <IconLogo />
          </Link>
          <Link href={"/"} className={classes.navItem}>
            <IconNavHome />
          </Link>
          <Link href={"/movies"} className={classes.navItem}>
            <IconNavMovies />
          </Link>
          <Link href={"/series"} className={classes.navItem}>
            <IconNavTVSeries />
          </Link>
          <Link href={"/bookmarks"} className={classes.navItem}>
            <IconNavBookmark />
          </Link>
        </div>
        <div>
          <Link href={"/login"}>
          <Image
            src={"/image-avatar.png"}
            alt="Photo of user"
            width={35}
            height={35}
            className={classes.user}
          />
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default MainNavigation;

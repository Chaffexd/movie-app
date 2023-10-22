import IconNavHome from "@/assets/IconNavHome";
import classes from "./mainnavigation.module.css";
import IconNavMovies from "@/assets/IconNavMovies";
import IconNavTVSeries from "@/assets/IconNavTVSeries";
import IconNavBookmark from "@/assets/IconNavBookmark";
import IconLogo from "@/assets/IconLogo";
import Image from "next/image";

const MainNavigation = () => {
  return (
    <nav className={classes.navBar}>
      <ul className={classes.list}>
        <div className={classes.listItems}>
          <li className={classes.logo}>
            <IconLogo />
          </li>
          <li className={classes.navItem}>
            <IconNavHome />
          </li>
          <li className={classes.navItem}>
            <IconNavMovies />
          </li>
          <li className={classes.navItem}>
            <IconNavTVSeries />
          </li>
          <li className={classes.navItem}>
            <IconNavBookmark />
          </li>
        </div>
        <div>
          <Image
            src={"/image-avatar.png"}
            alt="Photo of user"
            width={35}
            height={35}
            className={classes.user}
          />
        </div>
      </ul>
    </nav>
  );
};

export default MainNavigation;

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
          <li>
            <IconNavHome />
          </li>
          <li>
            <IconNavMovies />
          </li>
          <li>
            <IconNavTVSeries />
          </li>
          <li>
            <IconNavBookmark />
          </li>
        </div>
        <div>
          <Image
            src={"/movie-app/assets/image-avatar.png"}
            width={40}
            height={40}
          />
        </div>
      </ul>
    </nav>
  );
};

export default MainNavigation;

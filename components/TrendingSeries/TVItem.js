import Image from "next/image";
import Link from "next/link";
import classes from './tv.module.css';

const TVItem = ({ seriesId, seriesPoster, alt }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original/${seriesPoster}`;

  return (
    <li className={classes.seriesContainer}>
      <Link href={`/series/${seriesId}`}>
        <Image src={imageUrl} width={240} height={470} alt={alt} className={classes.seriesPoster}/>
      </Link>
    </li>
  );
};

export default TVItem;

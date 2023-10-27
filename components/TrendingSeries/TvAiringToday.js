import TVItem from "./TVItem";
import classes from "./tvairingtoday.module.css";

const TvAiringToday = ({ title, series }) => {
  const onTvToday = series.results;

  return (
    <div>
      <h1 className={classes.title}>{title}</h1>
      <ul className={classes.seriesContainer}>
        {onTvToday.map((program) => (
          <TVItem
            key={program.id}
            seriesId={program.id}
            seriesPoster={program.poster_path}
            alt={program.overview}
          />
        ))}
      </ul>
    </div>
  );
};

export default TvAiringToday;

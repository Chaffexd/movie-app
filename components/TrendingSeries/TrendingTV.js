import TVItem from "./TVItem";
import classes from './trending.module.css';

const TrendingTV = ({ trendingTVSeries, title }) => {
  const trendingTVResults = trendingTVSeries.results;

  return (
    <div className={classes.trendingTopContainer}>
      <h1 className={classes.heading}>{title}</h1>
      <ul className={classes.trendingSeriesContainer}>
        {trendingTVResults.map((trendingSeries) => (
          <TVItem 
            key={trendingSeries.id}
            seriesId={trendingSeries.id}
            seriesPoster={trendingSeries.poster_path}
            alt={trendingSeries.overview}
          />
        ))}
      </ul>
    </div>
  );
};

export default TrendingTV;

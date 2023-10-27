import TheatreNow from "@/components/TrendingMovies/TheatreNow";
import { moviesInTheatres } from "@/helpers/api-util";

const MoviePage = async ({}) => {
  const movieData = await moviesInTheatres();

  return (
    <div className={"container"}>
      <TheatreNow
        title={"What's on in theatres right now?"}
        movies={movieData}
      />
    </div>
  );
};

export default MoviePage;

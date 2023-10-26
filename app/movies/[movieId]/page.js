import MovieDetail from "@/components/MovieDetail/MovieDetail";
import { getTrendingMovies, getMovieData } from "@/helpers/api-util";

export async function generateMetadata({ params }) {
  const movieId = params.movieId;

  const movieData = await getMovieData(movieId);

  return {
    title: movieData.original_title,
    description: movieData.overview,
  };
}

export async function generateStaticParams() {
  const allMovies = await getTrendingMovies();

  return allMovies.results.map((movie) => ({
    movieId: movie.id.toString(),
  }));
}

const MovieDetailPage = async ({ params }) => {
  const { movieId } = params;
  console.log(movieId)

  const movieData = await getMovieData(movieId);
  const { title, overview, release_date, poster_path, vote_average } =
    movieData;

  return (
    <>
      <MovieDetail
        movieId={movieId}
        title={title}
        description={overview}
        releaseDate={release_date}
        posterSource={poster_path}
        rating={vote_average}
      />
    </>
  );
};

export default MovieDetailPage;

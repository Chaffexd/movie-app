import SearchBar from "@/components/Input/SearchBar";
import Trending from "@/components/Trending/Trending";
import { getTrendingMovies, getMovieImages } from "@/helpers/api-util";

export default async function Home() {
  const trendingMovies = await getTrendingMovies();

  return (
    <>
      <SearchBar />
      <Trending 
        trendingMovies={trendingMovies}
      />
    </>
  )
}

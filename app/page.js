import SearchBar from "@/components/Input/SearchBar";
import Trending from "@/components/Trending/Trending";
import { getTrendingMovies } from "@/helpers/api-util";

export default async function Home() {
  const trendingMovies = await getTrendingMovies();

  // console.log(trendingMovies.title)
  return (
    <>
      <SearchBar />
      <Trending 
        trendingMovies={trendingMovies}
      />
    </>
  )
}

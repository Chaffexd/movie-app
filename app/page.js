import SearchBar from "@/components/Input/SearchBar";
import Trending from "@/components/TrendingMovies/Trending";
import TrendingTV from "@/components/TrendingSeries/TrendingTV";
import { getTrendingMovies, getTrendingTVSeries } from "@/helpers/api-util";

export default async function Home() {
  const trendingMovies = await getTrendingMovies();
  const trendingTVSeries = await getTrendingTVSeries();

  return (
    <>
      <SearchBar />
      <Trending 
        title={"Trending Movies"}
        trendingMovies={trendingMovies}
      />
      <TrendingTV 
        title={"Trending TV Series"}
        trendingTVSeries={trendingTVSeries}
      />
    </>
  )
}

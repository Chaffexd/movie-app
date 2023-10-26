import SeriesDetail from "@/components/SeriesDetail/SeriesDetail";
import { getSeriesData, getTrendingTVSeries } from "@/helpers/api-util";

export async function generateMetadata({ params }) {
  const seriesId = params.seriesId;

  const seriesData = await getSeriesData(seriesId);

  return {
    title: seriesData.name,
    description: seriesData.overview,
  };
}

export async function generateStaticParams() {
    const allSeries = await getTrendingTVSeries();

    return allSeries.results.map((series) => ({
        seriesId: series.id.toString(),
    }));
}

const SeriesDetailPage = async ({ params }) => {
  const { seriesId } = params;
  // console.log(seriesId);

  const seriesData = await getSeriesData(seriesId);
  console.log(seriesData);
  const { name, overview, first_air_date, poster_path, vote_average } =
    seriesData;

  return (
    <>
      <SeriesDetail
        seriesId={seriesId}
        title={name}
        description={overview}
        releaseDate={first_air_date}
        posterSource={poster_path}
        rating={vote_average}
      />
    </>
  );
};

export default SeriesDetailPage;

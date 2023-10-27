import TvAiringToday from "@/components/TrendingSeries/TvAiringToday";
import { tvAiringToday } from "../../helpers/api-util";

const tvSeriesPage = async () => {
  const onTVtoday = await tvAiringToday();
  return (
    <div className="container">
      <TvAiringToday title={"What's on TV today?"} series={onTVtoday} />
    </div>
  );
};

export default tvSeriesPage;

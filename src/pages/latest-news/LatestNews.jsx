import { useSelector } from "react-redux";
import News from "../../components/news/News";

const LatestNews = () => {
  const { latestNews } = useSelector(state => state?.news || {});
  const { latestNewsError } = useSelector(state => state?.errors || {});
  const { isLoadingData } = useSelector((state) => state?.loader || false);

  return (<>
    {isLoadingData ?
      <h2>Loading...</h2> :
      <News news={latestNews} error={latestNewsError} title='Latest News'/>
    }
  </>)
};

export default LatestNews;
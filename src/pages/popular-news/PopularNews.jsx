import { useSelector } from "react-redux";
import News from "../../components/news/News";

const PopularNews = () => {
  const { popularNews } = useSelector((state) => state?.news || {});
  const { popularNewsError } = useSelector((state) => state?.errors || {});
  const { isLoadingData } = useSelector((state) => state?.loader || '');

  return (
    <>
      {isLoadingData ?
        <h2>Loading...</h2> :
        <News news={popularNews} error={popularNewsError} title='Popular News'/>
      }
    </>
  );
};

export default PopularNews;
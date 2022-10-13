import { useDispatch, useSelector } from "react-redux";
import News from "../../components/news/News";
import { useEffect } from "react";
import { GET_LATEST_NEWS } from "../../redux/constants";

const LatestNews = () => {
  const { latestNews } = useSelector(state => state?.news || {});
  const { latestNewsError } = useSelector(state => state?.errors || {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_LATEST_NEWS });
  }, [dispatch])

  return (
      <News news={latestNews} error={latestNewsError} title='Latest News'/>
  )
};

export default LatestNews;
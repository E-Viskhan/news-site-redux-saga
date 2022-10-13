import { useDispatch, useSelector } from "react-redux";
import News from "../../components/news/News";
import { useEffect } from "react";
import { GET_POPULAR_NEWS } from "../../redux/constants";

const PopularNews = () => {
  const { popularNews } = useSelector(state => state?.news || {});
  const { popularNewsError } = useSelector(state => state?.errors || {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_POPULAR_NEWS });
  }, [dispatch])

  return (
    <News news={popularNews} error={popularNewsError} title='Popular News'/>
  );
};

export default PopularNews;
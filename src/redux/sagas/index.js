import { call, put, takeEvery, select, throttle } from '@redux-saga/core/effects';
import {
  SET_CURRENT_PATHNAME,
  SET_LATEST_NEWS_ERROR, SET_LOADING_DATA,
  SET_POPULAR_NEWS_ERROR
} from "../constants";
import { getLatestNews, getPopularNews } from '../../api'
import { setLatestNews, setPopularNews } from "../actions/actionCreator";

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNews, 'react');
    yield put(setLatestNews(hits));
  } catch {
    yield put({ type: SET_LATEST_NEWS_ERROR, payload: 'Error fetching latest news' });
  }
}

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews);
    yield put(setPopularNews(hits));
  } catch {
    yield put({ type: SET_POPULAR_NEWS_ERROR, payload: 'Error fetching popular news' });
  }
}

export function* watchNewsSaga() {
  yield put({ type: SET_LOADING_DATA, payload: true });
  const pathname = yield select(({ location }) => location.pathname );

  switch(pathname) {
    case '/popular-news':
      yield call(handlePopularNews);
      break;
    case '/latest-news':
      yield call(handleLatestNews);
      break;
    default:
      break;
  }

  yield put({ type: SET_LOADING_DATA, payload: false });
}

export default function* rootSaga() {
  yield throttle(5000, SET_CURRENT_PATHNAME, () => console.log('path changed'));
  yield takeEvery(SET_CURRENT_PATHNAME, watchNewsSaga);
}

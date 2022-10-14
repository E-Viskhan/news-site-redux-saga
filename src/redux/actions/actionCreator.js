import { SET_CURRENT_PATHNAME, SET_LATEST_NEWS, SET_POPULAR_NEWS, } from "../constants";

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const setCurrentPathname = (payload) => ({
  type: SET_CURRENT_PATHNAME,
  payload
});
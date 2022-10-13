export const getLatestNews = async (searchQuery) => {
  const request = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  return await request.json();
};

export const getPopularNews = async () => {
  const request = await fetch(`https://hn.algolia.com/api/v1/search?query=`);
  return await request.json();
};
import axios from "axios";

const accessKey = import.meta.env.ACCESS_KEY;

export async function fetchUnsplashPhotos(query, page) {
  let url;
  if (query) {
    url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}`;
  } else {
    url = `https://api.unsplash.com/photos?page=${page}`;
  }

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    const rateLimit = response.headers["x-ratelimit-limit"];
    const rateLimitRemaining = response.headers["x-ratelimit-remaining"];

    if (rateLimitRemaining <= 0) {
      return [];
    }

    return response.data;
  } catch (error) {
    return [];
  }
}

import axios from "axios";

const accessKey = import.meta.env.ACCESS_KEY;

export async function fetchUnsplashPhotos(query) {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${query}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    return response.data;
  } catch (error) {
    return [];
  }
}

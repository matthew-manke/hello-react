import axios from 'axios';

export async function fetchApi(url: string) {
  const response = await axios.get(url, {
    validateStatus: () => true,
  });

  return {
    status: response.status,
    statusText: response.statusText,
    data: response.data,
  };
}
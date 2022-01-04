import axios from 'axios';
import useSWR from 'swr';

const URL = 'https://jsonplaceholder.typicode.com';

function fetch(target) {
  const url = `${URL}/${target}`;
  const instance = axios.create({ baseURL: url });
  return instance;
}

function fetcher(target) {
  const url = `${URL}/${target}`;
  const result = axios.get(url);
  return result;
}


function useSWRFetcher(target) {
  const { data, error } = useSWR(target, fetcher);
  return {
    data,
    error,
    loading: !data && !error,
  };
}
export { fetch, fetcher, useSWRFetcher };
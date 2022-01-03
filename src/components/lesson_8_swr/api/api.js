import axios from 'axios';

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

export { fetch, fetcher };
import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function fetchCategories() {
  const url = `https://api.gousto.co.uk/products/v2.0/categories`
  const request = axios.get(url);

  console.log('request:', request);

  return {
    type: FETCH_CATEGORIES,
    payload: request
  };
}

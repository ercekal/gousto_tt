import fetch from 'isomorphic-fetch'
import axios from 'axios'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function fetchCategories() {
  return dispatch => {
    axios.get("https://api.gousto.co.uk/products/v2.0/categories")
    .then((res) => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: res.data
      })
    })
  }
}

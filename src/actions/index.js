import axios from 'axios'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_ITEMS = 'FETCH_ITEMS';

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

export function fetchItems() {
  return dispatch => {
    axios.get("https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120")
    .then((res) => {
      dispatch({
        type: FETCH_ITEMS,
        payload: res.data
      })
    })
  }
}

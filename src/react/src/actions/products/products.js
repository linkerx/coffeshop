import tokenAxios from 'utils/token-axios';

export function getProducts(filter) {
  const axios = tokenAxios();
  return (dispatch) => {
    axios.get('/product', {params: filter} ).then((response) => {
      dispatch({type: 'PRODUCTS_FETCH', payload: response.data.data});
    }).catch( (error) => {
      dispatch({type: 'DATA_FETCH_ERROR', payload: error})
    });
  }
}

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

export function getCombos(filter) {
  const axios = tokenAxios();
  return (dispatch) => {
    axios.get('/product/combos', {params: filter} ).then((response) => {
      dispatch({type: 'COMBOS_FETCH', payload: response.data.data});
    }).catch( (error) => {
      dispatch({type: 'DATA_FETCH_ERROR', payload: error})
    });
  }
}

export const setFoundCombo = (id) => (dispatch) => {
  return dispatch({type: 'COMBO_FOUND', payload: id});
}

export const setNotFoundCombo = (id) => (dispatch) => {
  return dispatch({type: 'COMBO_NOT_FOUND', payload: id});
}

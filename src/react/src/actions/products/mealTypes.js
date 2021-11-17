import tokenAxios from 'utils/token-axios';

export function getMealTypes() {
  const axios = tokenAxios();
  return (dispatch) => {
    axios.get('/mealType').then((response) => {
      dispatch({type: 'MEALTYPES_FETCH', payload: response.data.data});
    }).catch( (error) => {
      dispatch({type: 'DATA_FETCH_ERROR', payload: error})
    });
  }
}

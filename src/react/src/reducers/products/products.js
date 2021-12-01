const ProductsReducer = (state = [],action) => {
  switch(action.type){
    case 'PRODUCTS_FETCH':
      return action.payload;
    default:
  }
  return state
}
export default ProductsReducer;

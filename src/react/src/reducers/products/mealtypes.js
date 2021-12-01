const MealTypesReducer = (state = [],action) => {
  switch(action.type){
    case 'MEALTYPES_FETCH':
      return action.payload;
    default:
  }
  return state
}
export default MealTypesReducer;
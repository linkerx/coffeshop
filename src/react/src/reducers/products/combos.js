const CombosReducer = (state = [],action) => {
    switch(action.type){
      case 'COMBOS_FETCH':
        return action.payload;
      default:
    }
    return state
  }
export default CombosReducer;
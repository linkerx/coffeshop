const CombosReducer = (state = [],action) => {
    switch(action.type){
      case 'COMBOS_FETCH': {
        return action.payload;
      }
      case 'COMBO_FOUND': {
        let combos = [].concat(state);
        let combo = combos.find((combo) => combo.id === action.payload);
        if(combo) combo.found = true;
        return combos;
      }
      case 'COMBO_NOT_FOUND': {
        let combos = [].concat(state);
        let combo = combos.find((combo) => combo.id === action.payload);
        if(combo) combo.found = false;
        return combos;
      }
      default:
    }
    return state
  }
export default CombosReducer;

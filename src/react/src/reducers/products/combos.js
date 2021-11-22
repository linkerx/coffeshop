export default function(state = [],action) {
    switch(action.type){
      case 'COMBOS_FETCH':
        return action.payload;
      default:
    }
    return state
  }
  
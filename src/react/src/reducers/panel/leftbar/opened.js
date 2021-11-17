export default function(state = null,action) {

  switch(action.type){
    case 'USER_LOGOUT':
      return false;
    case 'LEFTBAR_TOGGLE':
      return !state;
    case 'LEFTBAR_OPEN':
      return true;
    case 'LEFTBAR_CLOSE':
      return false;
    default:
  }
  return state
}

export default function(state = null,action) {

  switch(action.type){
    case 'USER_LOGOUT':
      return false;
      case 'RIGHTBAR_TOGGLE':
        return !state;
      case 'RIGHTBAR_OPEN':
        return true;
      case 'RIGHTBAR_CLOSE':
        return false;
    default:
  }
  return state
}

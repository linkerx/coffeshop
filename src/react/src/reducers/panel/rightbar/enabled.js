export default function(state = false,action) {

  switch(action.type){
    case 'RIGHTBAR_ENABLE':
      return true;
    case 'RIGHTBAR_DISABLE':
      return false;
    default:
  }
  return state
}

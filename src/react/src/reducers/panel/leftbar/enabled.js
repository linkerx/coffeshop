export default function(state = false,action) {

  switch(action.type){
    case 'LEFTBAR_ENABLE':
      return true;
    case 'LEFTBAR_DISABLE':
      return false;
    default:
  }
  return state
}

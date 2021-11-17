export default function(state = false,action) {

  switch(action.type){
    case 'HEADER_OPEN':
      return true;
    case 'HEADER_CLOSE':
      return false;
    default:
  }
  return state
}

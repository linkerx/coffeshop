export default function(state = [],action) {
  switch(action.type){
    case 'MEALTYPES_FETCH':
      console.log(action);
      return action.payload;
    default:
  }
  return state
}

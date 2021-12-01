
let user = JSON.parse(localStorage.getItem('user'));
var initUser = {};
if(user){
  initUser = {
    authenticated: true,
    data: user,
    error: false
  }
} else {
  initUser = {
    authenticated: false,
    data: null,
    error: false
  }
}

const UserReducer = (state = initUser,action) => {
  switch(action.type){
    case 'USER_LOGIN':
      if(!action.error){
        localStorage.setItem('user', JSON.stringify(action.payload.data));
        return {
          authenticated: true,
          data: action.payload.data,
          error: false
        }
      }
      else{
        return {
          authenticated: false,
          data: null,
          error: action.payload.response.data
        }
      }
    case 'USER_LOGOUT':
      localStorage.removeItem('user');
      return {
        authenticated: false, data: null, error: false
      };

    case 'USER_LOGIN_FAILED': {
      if (action.payload.response) {
        if (action.payload.response.status === 400 ) {
            console.log({ error: 'falto algo'})
        } else if (action.payload.response.status === 401 ) {
            console.log({ error: action.payload.response.data.detail })
        }
      } else if (action.payload.request) {console.log(action.payload.request)
      } else { console.log('Error', action.payload.message)}
      console.log(action.payload.config);
      break;
      }
    default:
  }
  return state
}

export default UserReducer;
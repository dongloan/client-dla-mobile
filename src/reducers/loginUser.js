import * as Types from './../constants/login';

const initialState = {
    currentUser: []
}
  
const loginUser = (state = initialState, action) => {
      switch (action.type) {
        case Types.LOGIN_USER : {
          const {userObj} = action.payload;
          localStorage.setItem('currentUser', JSON.stringify(state));
          console.log(userObj);
          return {
            ...state,
            currentUser : userObj   
          }
        }
          
        default:
          return state;
      }
    }

export default loginUser;
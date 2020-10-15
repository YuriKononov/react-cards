
const getInitialState = {
    users : [],
    curUser : {},
    isLoading: false,
    error: ''
  };
//https://habr.com/ru/post/483314/

  const allReducer = (state = getInitialState, action) => {
    switch(action.type){

        case 'GET_USERS_LOADING': 
          return {...state,
                  isLoading : true};

        case 'GET_USERS_SUCCESS': 
          return {...state,
                  users : action.payload,
                  isLoading : false};

        case 'GET_USERS_FAILED': 
          return {...state,
                  error : action.payload};
        
        case 'DELETE_USER': 
          return {...state,
                  users: action.payload};

        case 'EDIT_USER':
          return {...state, 
                  curUser: action.payload.user,
                  users : action.payload.users};

        case 'ADD_USER':
          return {...state, 
                  users : action.payload};

        
        


        default:
            return state;
    }
}

export default allReducer